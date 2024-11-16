const apiKey = '46d96cb40fd666dc8da8fdc02b4c2019'

export const getPopularMoviesList = async (page) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`)

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const movieList = await response.json()
        return movieList
    }
    catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};

export const getMoviesGenres = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)

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
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)

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
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)

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
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
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
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
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
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}&language=en-US`)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const movie = await response.json()

        return movie.results
    }
    catch (error) {
        throw error;
    }
};

export const getPersonByName = async (personName, page) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/person?query=${personName}&api_key=${apiKey}&include_adult=false&language=en-US&page=${page}`)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const person = await response.json()

        return person.results
    }
    catch (error) {
        throw error;
    }
};










