import { useSelector } from "react-redux";
import { getMoviesById } from "../movieSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export const MovieDetails = () => {

  const { id } = useParams()
  const movieDetails = useSelector(state => getMoviesById(state, id))

  console.log(movieDetails)

  return (
    <>
    </>
  );
}