import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export const useMovieDetails = () => {
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