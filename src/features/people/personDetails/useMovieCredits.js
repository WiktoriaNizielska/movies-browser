// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom";

// export const useMovieCredits = () => {
//   const [cast, setCast] = useState([]);
//   const [crew, setCrew] = useState([]);
//   const { id } = useParams();
//   const getMovieCredits = async () => {
//     try {
//       const response = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=46d96cb40fd666dc8da8fdc02b4c2019`)

//       const movieCredits = await response.json();
//       const cast = movieCredits.cast;
//       const crew = movieCredits.crew;

//       setCast(cast);
//       setCrew(crew);

//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   useEffect(() => { getMovieCredits() })

//   return { cast, crew }
// }