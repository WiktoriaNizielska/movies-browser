// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom";

// export const usePersonDetails = () => {
//   const [personDetails, setPersonDetails] = useState([]);
//   const { id } = useParams();
//   const getPersonDetails = async () => {
//     try {
//       const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=46d96cb40fd666dc8da8fdc02b4c2019`)
      
//       const personDetails = await response.json();
//       setPersonDetails(personDetails);

//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   useEffect(() => { getPersonDetails() }, [])

//   return { personDetails }
// }