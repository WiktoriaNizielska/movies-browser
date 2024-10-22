import { useEffect, useState } from "react"
import { Container, GenresContainer, GenreTag, Header, Image, MainPageContainer, MainPageMovie, Rate, RateContainer, Star, TextWrapper, Title, Votes, Wrapper, Year } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const useFetchData = () => {
  const [movies, showMovies] = useState([])
  const [movieGenres, setMovieGenres] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=46d96cb40fd666dc8da8fdc02b4c2019')
      const responseGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=46d96cb40fd666dc8da8fdc02b4c2019')

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const responseGeneresJson = await responseGenres.json()
      const data = await response.json()
      const movieList = await data.results
      const movieGenres = await responseGeneresJson.genres

      setMovieGenres(movieGenres)
      showMovies(movieList)
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return [movies, movieGenres]
}

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
                <Link to={`/movie/${movie.id}`}>
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