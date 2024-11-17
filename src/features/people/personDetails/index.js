import { useParams } from "react-router-dom/cjs/react-router-dom";
import {
  Description,
  Info,
  InfoContainer,
  Label,
  LineWrapper,
  LongLabel,
  Name,
  PersonImage,
  PersonTile,
  ShortLabel,
  Text,
  Wrapper,
  Container,
  GenresContainer,
  Header,
  Image,
  MainPageContainer,
  MainPageMovie,
  Rate,
  RateContainer,
  Star,
  TextWrapper,
  Title,
  Votes,
  Year,
  Section,
  GenreTag
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres, selectPeopleCastMovies, selectPeopleCrewMovies, selectPeopleDetails, selectPeopleStatus, setPeopleId } from "./detailsSlice";
import { Error } from "../../../common/Error";
import { Loading } from "../../../common/Loading";
import { useEffect } from "react";
import { NoMoviePoster } from "../../../common/NoMoviePoster/styled";
import { NoPersonPoster } from "../../../common/NoPersonPoster/styled";
import { formatDate, formatRate, formatYear } from "../../formatFunctions";
import { SearchingPeopleContainer } from "../../../common/SearchingPeopleContainer";
import { selectMovieQuery } from "../../../common/SearchingMovieContainer/searchingSlice";

export const PersonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectPeopleStatus);

  useEffect(() => {
    dispatch(setPeopleId(id))
  }, [dispatch, id]);

  const query = useSelector(selectMovieQuery)
  const person = useSelector(selectPeopleDetails);
  const cast = useSelector(selectPeopleCastMovies);
  const crew = useSelector(selectPeopleCrewMovies);
  const genres = useSelector(selectGenres);
  const genre = genres.genres;

  return (
    status === "loading" ? <Loading /> :
      status === "error" ? <Error /> :
        query === null ?
          <Wrapper>
            <PersonTile>
              {person.profile_path ?
                <PersonImage
                  src={`https://image.tmdb.org/t/p/h632${person.profile_path}`}
                  alt="Profile" />
                : <NoPersonPoster />
              }
              <Text>
                <Name >{person.name}</Name>
                <InfoContainer>
                  <LineWrapper>
                    <LongLabel>Date of birth: </LongLabel>
                    <ShortLabel>Birth:</ShortLabel>
                    {person.birthday ? <Info>{formatDate(person.birthday)}</Info> : "Unavaliable information"}
                  </LineWrapper>
                  <LineWrapper>
                    <Label>Place of birth: </Label>
                    <Info>{person.place_of_birth || "Unavaliable information"}</Info>
                  </LineWrapper>
                </InfoContainer>
              </Text>
              <Description>{person.biography || "Unavaliable information"}</Description>
            </PersonTile>
            {cast.length > 0 ?
              <Section>
                <Header>Cast({cast.length})</Header>
                <MainPageContainer>
                  {cast.map(movie =>
                    <MainPageMovie
                      key={movie.id}
                      to={`/movies/${movie.id}`}
                    >
                      {movie.poster_path ?
                        (<Image
                          key={movie.id}
                          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                          alt="Poster"
                        />)
                        : <NoMoviePoster />
                      }
                      <TextWrapper>
                        <Container>
                          <Title>
                            {movie.title}
                          </Title>
                          {movie.release_date ? <Year>{movie.character} ({formatYear(movie.release_date)})</Year> : null}
                          <GenresContainer>
                            {movie.genre_ids.map((id) =>
                              <GenreTag key={id}>
                                {genre.find((genreId) =>
                                  genreId.id === id).name}
                              </GenreTag>
                            )}
                          </GenresContainer>
                        </Container>
                        <RateContainer>
                          <Star />
                          <Rate>{formatRate(movie.vote_average)}</Rate>
                          <Votes>{movie.vote_count} votes</Votes>
                        </RateContainer>
                      </TextWrapper>
                    </MainPageMovie>
                  )}
                </MainPageContainer>
              </Section>
              : null}
            {crew.length > 0 ?
              <Section>
                <Header>Crew({crew.length})</Header>
                <MainPageContainer>
                  {crew.map(movie =>
                    <MainPageMovie
                      key={movie.id}
                      to={`/movies/${movie.id}`}
                    >
                      {movie.poster_path ?
                        (<Image
                          key={movie.id}
                          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                          alt="Poster"
                        />)
                        : <NoMoviePoster />
                      }
                      <TextWrapper>
                        <Container>
                          <Title>
                            {movie.title}
                          </Title>
                          {movie.release_date ? <Year>{movie.job} ({formatYear(movie.release_date)})</Year> : null}
                          <GenresContainer>
                            {movie.genre_ids.map((id) =>
                              <GenreTag key={id}>
                                {genre.find((genreId) =>
                                  genreId.id === id).name}
                              </GenreTag>
                            )}
                          </GenresContainer>
                        </Container>
                        <RateContainer>
                          <Star />
                          <Rate>{formatRate(movie.vote_average)}</Rate>
                          <Votes>{movie.vote_count} votes</Votes>
                        </RateContainer>
                      </TextWrapper>
                    </MainPageMovie>
                  )}
                </MainPageContainer>
              </Section>
              : null}
          </Wrapper>
          :
          <SearchingPeopleContainer />
  );
};