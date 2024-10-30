export const getPopularMoviesList = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=46d96cb40fd666dc8da8fdc02b4c2019')

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const movieList = await response.json()
        return movieList.results
    }
    catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};

export const getMoviesGenres = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=46d96cb40fd666dc8da8fdc02b4c2019')

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const movieGenres = await response.json()
        return movieGenres.genres
    }
    catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};







