import { useEffect, useState } from "react"
import { Header, MainPageContainer, MainPageMovie, Wrapper, } from "./styled"
import { Star } from "../../../common/MovieContainer/styled";
import { Pagination } from "../../../common/Pagination";

export const MovieList = () => {
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

  return (
    <Wrapper>
    <Header>Popular movies</Header>
      <MainPageContainer>
        {movies.map(movie =>
          <MainPageMovie
            key={movie.id}>
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=""
            />
            {movie.original_title}<br />
            {movie.release_date}<br />
            <Star />
            {movie.vote_average} {""}<br />
            {movie.vote_count} votes<br />
            {movie.genre_ids.map((id) =>
              <li>
                {movieGenres.find((genreId) =>
                  genreId.id === id).name}
              </li>
            )}
          </MainPageMovie>
        )}
      </MainPageContainer>
      <Pagination></Pagination>
    </Wrapper>
  );
};