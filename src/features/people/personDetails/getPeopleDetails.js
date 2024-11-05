export const getPeopleDetails = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/person/${id}?api_key=46d96cb40fd666dc8da8fdc02b4c2019`
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw error;
    };
};