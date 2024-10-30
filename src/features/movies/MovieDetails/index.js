import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../../../common/Loading";
import { MovieContainer } from "../../../common/MovieContainer";
import { useSelector } from "react-redux";
import { selectMoviesState } from "../movieSlice";
import { Error } from "../../../common/Error";
import { GenresContainer, GenreTag } from "../movieList/styled";

const useMovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const { id } = useParams();
  const getMoviesDetails = async () => {

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=46d96cb40fd666dc8da8fdc02b4c2019`)

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const movieData = await response.json()
      const genres = movieData.genres

      setMovieDetails(movieData)
      setMovieGenres(genres)
    }
    catch (error) {
      console.log(error)
      throw new Error(error.message);
    }
  };
  useEffect(() => { getMoviesDetails() }, [])

  return { movieDetails, movieGenres }
};

export const MovieDetails = () => {
  const { movieDetails, movieGenres } = useMovieDetails([])
  const { loading, error } = useSelector(selectMoviesState)
  const { id } = useParams()

  return (
    <>
      {loading ? <Loading /> :
        error ? <Error />
          : <MovieContainer
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieDetails.poster_path} alt="Profile"`}
            movieYear={movieDetails.release_date}
            movieDescription={movieDetails.overview}
            title={movieDetails.original_title}
            rate={movieDetails.vote_average}
            voteCount={movieDetails.vote_count}
            tags={<GenresContainer>
              {movieGenres.map(movie =>
                <GenreTag key={movie.id}>
                  {movie.name}
                </GenreTag>
              )}
            </GenresContainer>}
          >
          </MovieContainer>
      }
    </>
  );
}


