const nameGenres = (genreIds, genres) => {
	return (genreIds || []).map(
		(id) => genres.find((genre) => genre.id === id).name
	);
};

const changeDateFormat = (releaseDate) => {
	const date = new Date(releaseDate);

	return date.getFullYear();
};

const changeVoteFormat = (voteAverage) => {

	const roundedVote = voteAverage.toFixed(1).replace(".", ",");


	return roundedVote;
};

export const processPeopleCastMoviesData = (castMovies, genreList) => {
	const genres = genreList.genres;

	return castMovies.map((movie) => ({
		id: movie.id,
		creditId:movie.credit_id,
		title: movie.title,
		date: changeDateFormat(movie.release_date),
		rating: changeVoteFormat(movie.vote_average),
		vote_count: movie.vote_count,
		release_date: movie.release_date,
		namedGenres: nameGenres(movie.genre_ids, genres),
		poster: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
	}));
};

export const processPeopleCrewMoviesData = (crewMovies, genreList) => {
	const genres = genreList.genres;

	return crewMovies.map((movie) => ({
		id: movie.id,
		creditId:movie.credit_id,
		title: movie.title,
		date: changeDateFormat(movie.release_date),
		rating: changeVoteFormat(movie.vote_average),
		vote_count: movie.vote_count,
		release_date: movie.release_date,
		namedGenres: nameGenres(movie.genre_ids, genres),
		poster: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
	}));
};