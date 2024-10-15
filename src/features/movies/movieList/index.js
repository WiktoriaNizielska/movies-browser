import { useEffect, useState } from "react"
import { MovieImage, TileMovie } from "./styled"

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
    <TileMovie>
      <MovieImage >
        {movies.map(movie =>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
        )}
      </MovieImage>
    </TileMovie>
  );
}