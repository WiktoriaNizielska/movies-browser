import { useEffect, useState } from "react";

export const useFetchData = () => {
    const [movies, showMovies] = useState([])
    const [movieGenres, setMovieGenres] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=46d96cb40fd666dc8da8fdc02b4c2019')
            const responseGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=46d96cb40fd666dc8da8fdc02b4c2019')

            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const responseGeneresJson = await responseGenres.json()
            const data = await response.json()
            const movieList = await data.results
            const movieGenres = await responseGeneresJson.genres

            setMovieGenres(movieGenres)
            showMovies(movieList)
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    return [movies, movieGenres]
}