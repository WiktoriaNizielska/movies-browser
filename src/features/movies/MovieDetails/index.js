import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../../../common/Loading";
import { MovieContainer } from "../../../common/MovieContainer";
import { useSelector } from "react-redux";
import { selectMoviesState } from "../movieSlice";
import { Error } from "../../../common/Error";
import { GenresContainer, GenreTag } from "../movieList/styled";
import { useMovieDetails } from "../useMovieDetails";



export const MovieDetails = () => {
  const { movieDetails, movieGenres } = useMovieDetails([])
  const { loading, error } = useSelector(selectMoviesState)

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


