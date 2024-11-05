

export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=46d96cb40fd666dc8da8fdc02b4c2019`
        );

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return await response.json();
    }
    catch (error) {
        throw error;
    }
};