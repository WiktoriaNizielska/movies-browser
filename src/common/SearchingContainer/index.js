import { useSelector } from "react-redux";
import { selectMovieGenres, selectMovieQuery, selectMoviesState, selectSearchedMovies } from "../../features/movies/movieSlice";
import {
  Container,
  GenresContainer,
  GenreTag,
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
  Wrapper,
  Year
} from "./styled";
import { Loading } from "../Loading";
import { Error } from "../Error";

export const SearchingContainer = () => {
  const searchedMovies = useSelector(selectSearchedMovies);
  const movieGenres = useSelector(selectMovieGenres);
  const query = useSelector(selectMovieQuery);
  const { loading, error } = useSelector(selectMoviesState);
  const formatYear = (date) => date.split("-")[0];

  return (
    <Wrapper>
      <>
        <Header>Search results for "{query}" ({searchedMovies.length})</Header>
        <MainPageContainer>
          {searchedMovies.map(movie =>
            <MainPageMovie
              key={movie.id}
            // to={`/movies/${movie.id}`}
            >
              <Image
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.backdrop_path}`} alt="Poster"
              />
              <TextWrapper>
                <Container>
                  <Title>
                    {movie.original_title}
                  </Title>
                  <Year>{formatYear(movie.release_date)}</Year>
                  <GenresContainer>
                    {movie.genre_ids.map((id) =>
                      <GenreTag key={id}>
                        {movieGenres.find((genreId) =>
                          genreId.id === id).name}
                      </GenreTag>
                    )}
                  </GenresContainer>
                </Container>
                <RateContainer>
                  <Star />
                  <Rate>{movie.vote_average.toFixed(1)}</Rate>
                  <Votes>{movie.vote_count} votes</Votes>
                </RateContainer>
              </TextWrapper>
            </MainPageMovie>
          )}
        </MainPageContainer>
      </>
    </Wrapper>
  )
};

