import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../../common/Loading";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieGenre, selectMoviesDetails, selectMoviesState, setId } from "../movieSlice";
import { Error } from "../../../common/Error";
import { MovieTitle, PosterContainer, RateMax, RateWrapper, Star, TitleConatiner, TitleRate, TitleVotes, Description, Info, InfoContainer, Label, LineWrapper, LongLabel, Name, PersonImage, PersonTile, ShortLabel, Text, Wrapper, Container, GenresContainer, Header, Image, MainPageContainer, MainPageMovie, Rate, RateContainer, TextWrapper, Title, Votes, Year, Section, GenreTag, MovieTile, MoviePoster, TileTitle, PersonContainer, PersonName, Character, SmallStar, BackdropWrapper, MaxRate } from "./styled";
import { NoMoviePoster } from "../../../common/NoMoviePoster/styled";
import { Backdrop } from "./Backdrop";
import { formatCountries } from "../../formatFunctions";

export const MovieDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setId(id))
  }, [dispatch, id])

  const { loading, error } = useSelector(selectMoviesState)
  const movieGenres = useSelector(selectMovieGenre)
  const movieDetails = useSelector(selectMoviesDetails)


  return (
    <>
      { loading ? <Loading /> :
        error ? <Error />
          :
          <>
            <Backdrop
              backgroundURL={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
              title={movieDetails.title}
              votes={movieDetails.vote_count}
              rate={movieDetails.vote_average}
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
                  <Year>{(movieDetails.release_date)}</Year>
                  <InfoContainer>
                    <LineWrapper>
                      <Label>Production: </Label>
                      {/* <Info>{formatCountries(movieDetails.production_countries)}</Info> */}
                    </LineWrapper>
                    <LineWrapper>
                      <Label>Release date:  </Label>
                      <Info>{movieDetails.release_date}</Info>
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
                    <SmallStar /><Rate> {movieDetails.vote_average}</Rate><MaxRate>/ 10</MaxRate><Votes>{movieDetails.vote_count} votes</Votes>
                  </RateContainer>
                </Text>
                <Description>{movieDetails.overview || "Unavaliable information"}</Description>
              </MovieTile>
              {/* <Section>
                <Header>Cast</Header>
                <PersonContainer>
                  <PersonTile>
                    <PersonName></PersonName>
                    <Character></Character>
                  </PersonTile>
                </PersonContainer>
              </Section>
              <Section>
                <Header>Crew</Header>
                <PersonContainer>
                  <PersonTile>
                    <PersonName></PersonName>
                    <Character></Character>
                  </PersonTile>
                </PersonContainer>
              </Section> */}
            </Wrapper>
          </>
      }
    </>
  );
}


