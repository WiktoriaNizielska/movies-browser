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

export const getMoviesDetails = async (id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=46d96cb40fd666dc8da8fdc02b4c2019`)

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const movieData = await response.json()
        return movieData
    }
    catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};

export const getMovieGenre = async (id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=46d96cb40fd666dc8da8fdc02b4c2019`)

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const movieData = await response.json()
        const genres = movieData.genres
        return genres
    }
    catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};

export const getCast = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=46d96cb40fd666dc8da8fdc02b4c2019`
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data.cast;
    } catch (error) {
        throw error;
    }
};

export const getCrew = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=46d96cb40fd666dc8da8fdc02b4c2019`
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data.crew;

    } catch (error) {
        throw error;
    }
};
export const getMovieByName = async (movieName) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/keyword?query=${movieName}&api_key=46d96cb40fd666dc8da8fdc02b4c2019`)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const movie = await response.json()
        return movie
    }
    catch (error) {

    }
}







