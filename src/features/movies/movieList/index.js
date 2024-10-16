import { useEffect, useState } from "react"
import { MainPageContainer, MainPageMovie, } from "./styled"
import { Star } from "../../../common/MovieContainer/styled";

export const MovieList = () => {
  const [movies, showMovies] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=46d96cb40fd666dc8da8fdc02b4c2019')

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = await response.json()
      const movieList = await data.results

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
    <MainPageContainer>
      {movies.map(movie =>
        <MainPageMovie key={movie.id}>
          <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
          {movie.original_title}<br />
          {movie.release_date}<br />
          <Star />{movie.vote_average} {""}<br /> {movie.vote_count} votes
        </MainPageMovie>
      )}
    </MainPageContainer>
  );
};