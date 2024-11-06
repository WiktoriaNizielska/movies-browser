import { useParams } from "react-router-dom/cjs/react-router-dom";
import { Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectPeopleCastMovies, selectPeopleCrewMovies, selectPeopleDetails, selectPeopleStatus, setPeopleId } from "./detailsSlice";
import { Error } from "../../../common/Error";
import { Loading } from "../../../common/Loading";
import { useEffect } from "react";

export const PersonDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const status = useSelector(selectPeopleStatus);

	useEffect(() => {
		dispatch(setPeopleId(id))
	}, [id]);

	const person = useSelector(selectPeopleDetails);
	const castMovies = useSelector(selectPeopleCastMovies) || [];
	const crewMovies = useSelector(selectPeopleCrewMovies) || [];

	console.log(castMovies, crewMovies, person)

	switch (status) {
		case "loading":
			return <Loading />;
		case "error":
			return <Error />;
		default:
			return (
				<Wrapper>
					{person.name}
					{/* {castMovies.id} */}
				</Wrapper>
			);
	}
}