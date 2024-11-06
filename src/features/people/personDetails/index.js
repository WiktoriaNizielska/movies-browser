import { useParams } from "react-router-dom/cjs/react-router-dom";
import { Description, Info, InfoContainer, Label, LineWrapper, LongLabel, Name, PersonImage, PersonTile, ShortLabel, Text, Wrapper, Container, GenresContainer, Header, Image, MainPageContainer, MainPageMovie, Rate, RateContainer, Star, TextWrapper, Title, Votes, Year, Section } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres, selectPeopleCastMovies, selectPeopleCrewMovies, selectPeopleDetails, selectPeopleStatus, setPeopleId } from "./detailsSlice";
import { Error } from "../../../common/Error";
import { Loading } from "../../../common/Loading";
import { useEffect } from "react";
import { NoMoviePoster } from "../../../common/NoMoviePoster/styled";
import { NoPersonPoster } from "../../../common/NoPersonPoster/styled";

export const PersonDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const status = useSelector(selectPeopleStatus);

	useEffect(() => {
		dispatch(setPeopleId(id))
	}, [id]);

	const person = useSelector(selectPeopleDetails);
	const cast = useSelector(selectPeopleCastMovies);
	const crew = useSelector(selectPeopleCrewMovies);

	const formatYear = (date) => date.split("-")[0];

	switch (status) {
		case "loading":
			return <Loading />;
		case "error":
			return <Error />;
		default:
			return (
				<Wrapper>
					<PersonTile>
						{person.profile_path ?
							<PersonImage
								src={`https://image.tmdb.org/t/p/h632${person.profile_path}`}
								alt="Profile" />
							: <NoPersonPoster />
						}
						<Text>
							<Name >{person.name}</Name>
							<InfoContainer>
								<LineWrapper>
									<LongLabel>Date of birth: </LongLabel>
									<ShortLabel>Birth:</ShortLabel>
									<Info>{person.birthday || "Unavaliable information"}</Info>
								</LineWrapper>
								<LineWrapper>
									<Label>Place of birth: </Label>
									<Info>{person.place_of_birth || "Unavaliable information"}</Info>
								</LineWrapper>
							</InfoContainer>
						</Text>
						<Description>{person.biography || "Unavaliable information"}</Description>
					</PersonTile>
					<Section>
						<Header>Cast({cast.length})</Header>
						<MainPageContainer>
							{cast.map(movie =>
								<MainPageMovie
									key={movie.id}
									to="/movies-browser#/movies"
								>
									{movie.poster_path ?
										(<Image
											key={movie.id}
											src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
											alt="Poster"
										/>)
										: <NoMoviePoster />
									}
									<TextWrapper>
										<Container>
											<Title>
												{movie.title}
											</Title>
											{movie.release_date ? <Year>{movie.character} ({formatYear(movie.release_date)})</Year> : null}
											<GenresContainer>
											</GenresContainer>
										</Container>
										<RateContainer>
											<Star />
											<Rate>{movie.vote_average.toFixed(1)}</Rate>
											<Votes>{movie.vote_count} votes</Votes>
										</RateContainer>
									</TextWrapper>
								</MainPageMovie>
							)}
						</MainPageContainer>
					</Section>
					<Section>
						<Header>Crew({crew.length})</Header>
						<MainPageContainer>
							{crew.map(movie =>
								<MainPageMovie
									key={movie.id}
									to="/movies-browser#/movies"
								>
									{movie.poster_path ?
										(<Image
											key={movie.id}
											src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
											alt="Poster"
										/>)
										: <NoMoviePoster />
									}
									<TextWrapper>
										<Container>
											<Title>
												{movie.title}
											</Title>
											{movie.release_date ? <Year>{movie.job} ({formatYear(movie.release_date)})</Year> : null}
											<GenresContainer>
											</GenresContainer>
										</Container>
										<RateContainer>
											<Star />
											<Rate>{movie.vote_average.toFixed(1)}</Rate>
											<Votes>{movie.vote_count} votes</Votes>
										</RateContainer>
									</TextWrapper>
								</MainPageMovie>
							)}
						</MainPageContainer>
					</Section>
				</Wrapper>
			);
	}
}