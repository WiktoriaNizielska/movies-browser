import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom";
import { } from "../../movies/movieList/styled";
import { Description, Info, InfoContainer, Label, LineWrapper, LongLabel, Name, PersonImage, PersonTile, ShortLabel, Text, Wrapper, Container, GenresContainer, Header, Image, MainPageContainer, MainPageMovie, Rate, RateContainer, Star, TextWrapper, Title, Votes, Year, NoMoviePoster, Section } from "./styled";

import { useDispatch, useSelector } from "react-redux";
import { selectPeopleCastMovies, selectPeopleCrewMovies, selectPeopleDetails, selectPeopleStatus, setPeopleId } from "./detailsSlice";
import { Error } from "../../../common/Error";
import { Loading } from "../../../common/Loading";
import { useEffect } from "react";

export const PersonDetails = () => {
  const params = useParams();
	const dispatch = useDispatch();
  const location = useLocation();
  const status = useSelector(selectPeopleStatus);

	useEffect(() => {
		console.log(params.id)
		dispatch(setPeopleId(params.id));

	}, [params.id, dispatch]);

	const person = useSelector(selectPeopleDetails);
	const castMovies = useSelector(selectPeopleCastMovies) || [];
	const crewMovies = useSelector(selectPeopleCrewMovies)|| [];

  console.log(person)

	switch (status) {
		case "loading":
			return <Loading/>;
		case "error":
			return <Error />;
		default:
  return (
    <Wrapper>
  
    </Wrapper>
  );
}}