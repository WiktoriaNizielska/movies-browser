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
import { Pagination } from "../../../common/Pagination";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useFetchData } from "../../fetchData";

export const MovieList = () => {
  const [movies, movieGenres] = useFetchData()

  return (
    <Wrapper>
      <Header>Popular movies</Header>
      <MainPageContainer>
        {movies.map(movie =>
          <MainPageMovie
            key={movie.id}>
            <Image
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="Poster"
            />
            <TextWrapper>
              <Container>
                <Link style={{ textDecoration: 'none' }} to={`/movie/${movie.id}`}>
                  <Title>
                    {movie.original_title}
                  </Title>
                </Link>
                <Year>{movie.release_date}</Year>
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
      <Pagination></Pagination>
    </Wrapper>
  );
};