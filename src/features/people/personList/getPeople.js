export const getPeople = async (page) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=46d96cb40fd666dc8da8fdc02b4c2019&page=${page}`)

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const personResponse = await response.json();
    const people = personResponse.results;
    return people;

  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};