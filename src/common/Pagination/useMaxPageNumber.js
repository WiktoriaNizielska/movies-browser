import { useSelector } from "react-redux";
import { selectMovies } from "../../features/movies/movieSlice";

export const maxPageNumber = 500;

export const useMaxPageNumber = () => {
  const data = useSelector(selectMovies);

  if (data.total_pages < 500) {
    return data.total_pages;
  }

  return 500;
}