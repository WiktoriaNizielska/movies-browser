import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../../common/Loading";
import { useDispatch, useSelector } from "react-redux";
import { selectCast, selectCrew, selectMovieGenre, selectMoviesDetails, selectMoviesState, setId } from "../movieSlice";
import { Error } from "../../../common/Error";
import { Description, Info, InfoContainer, Label, LineWrapper, PersonTile, Text, Wrapper, GenresContainer, Header, Image, Rate, RateContainer, Votes, Year, Section, GenreTag, MovieTile, MoviePoster, TileTitle, PersonContainer, PersonName, Character, SmallStar, MaxRate, LongInfo, ShortInfo } from "./styled";
import { NoMoviePoster } from "../../../common/NoMoviePoster/styled";
import { Backdrop } from "./Backdrop";
import { formatCountries, formatDate, formatRate, formatShortCountries } from "../../formatFunctions";
import { NoPersonPoster } from "../../../common/NoPersonPoster/styled";
import { formatYear } from "../../formatFunctions";
import { selectMovieQuery } from "../../../common/SearchingMovieContainer/searchingSlice";
import { SearchContainer } from "../../../common/Input/styled";
import { SearchingMovieContainer } from "../../../common/SearchingMovieContainer";

export const MovieDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setId(id))
  }, [dispatch, id])

  const { loading, error } = useSelector(selectMoviesState);
  const movieGenres = useSelector(selectMovieGenre);
  const movieDetails = useSelector(selectMoviesDetails);
  const casts = useSelector(selectCast);
  const crews = useSelector(selectCrew);
  const movieQuery = useSelector(selectMovieQuery)
  
  return (
    <>
      {loading ? <Loading /> :
        error ? <Error /> :
        movieQuery === null ?
          <>
            <Backdrop
              backgroundURL={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
              title={movieDetails.title}
              rate={movieDetails.vote_average}
              votes={movieDetails.vote_count}
            />
            <Wrapper>
              <MovieTile>
                {movieDetails.poster_path ?
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
                    alt="Poster" />
                  : <NoMoviePoster />
                }
                <Text>
                  <TileTitle >{movieDetails.title}</TileTitle>
                  {movieDetails.release_date ?
                    <Year>{formatYear(movieDetails.release_date)}</Year>
                    : null
                  }
                  <InfoContainer>
                    <LineWrapper>
                      <Label>Production: </Label>
                      {movieDetails.production_countries ?
                        <>
                          <LongInfo>{formatCountries(movieDetails.production_countries)}</LongInfo>
                          <ShortInfo>{formatShortCountries(movieDetails.production_countries)}</ShortInfo>
                        </>
                        : "Unavaliable information"
                      }
                    </LineWrapper>
                    <LineWrapper>
                      <Label>Release date:  </Label>
                      {movieDetails.release_date ?
                        <Info>{formatDate(movieDetails.release_date)}</Info>
                        : "Unavaliable information"
                      }
                    </LineWrapper>
                  </InfoContainer>
                  <GenresContainer>
                    {movieGenres.map(movie =>
                      <GenreTag key={movie.id}>
                        {movie.name}
                      </GenreTag>
                    )}
                  </GenresContainer>
                  <RateContainer>
                    <SmallStar />
                    {movieDetails.vote_average ?
                      <Rate> {formatRate(movieDetails.vote_average)}</Rate>
                      : null
                    }
                    <MaxRate>/ 10</MaxRate>
                    <Votes>{movieDetails.vote_count} votes</Votes>
                  </RateContainer>
                </Text>
                <Description>{movieDetails.overview || "Unavaliable information"}</Description>
              </MovieTile>
              <Section>
                <Header>Cast</Header>
                <PersonContainer>
                  {casts.map(cast =>
                    <PersonTile
                      to={`/people/${cast.id}`}
                      key={cast.id}
                    >
                      {cast.profile_path ?
                        <Image
                          src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                          alt="Profile"
                        />
                        : <NoPersonPoster />
                      }
                      <PersonName>{cast.name}</PersonName>
                      <Character>{cast.character}</Character>
                    </PersonTile>
                  )}
                </PersonContainer>
              </Section>
              <Section>
                <Header>Crew</Header>
                <PersonContainer>
                  {crews.map(crew =>
                    <PersonTile
                      to={`/people/${crew.id}`}
                      key={crew.id}
                    >
                      {crew.profile_path ?
                        <Image
                          src={`https://image.tmdb.org/t/p/w185${crew.profile_path}`}
                          alt="Profile"
                        />
                        : <NoPersonPoster />
                      }
                      <PersonName>{crew.name}</PersonName>
                      <Character>{crew.job}</Character>
                    </PersonTile>
                  )}
                </PersonContainer>
              </Section>
            </Wrapper>
          </> 
          : <SearchingMovieContainer/>
      }
    </>
  );
}


