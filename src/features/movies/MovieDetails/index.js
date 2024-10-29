import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../../../common/Loading";
import { MovieContainer } from "../../../common/MovieContainer";
import { useSelector } from "react-redux";
import { selectLoading } from "../movieSlice";

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
    }
  };
  useEffect(() => { getMoviesDetails() }, [])

  return { movieDetails, movieGenres }
};

export const MovieDetails = () => {
  const { movieDetails, movieGenres } = useMovieDetails([])
  const loading = useSelector(selectLoading)

  return (
    <>
      {loading ? <Loading /> : <MovieContainer
        movieYear={movieDetails.release_date}
        movieDescription={movieDetails.overview}
        title={movieDetails.original_title}
        rate={movieDetails.vote_average}
        voteCount={movieDetails.vote_count}
      >
      </MovieContainer>
      }
      {/* <GenresContainer>
        <GenreTag>
        </GenreTag>
      </GenresContainer> */}
    </>
  );
}


