import { useDispatch, useSelector } from "react-redux";
import { Header, Image, Name, PeopleConatiner, Tile, Wrapper } from "./styled";
import { useEffect } from "react";
import { Loading } from "../../../common/Loading";
import { toPeopleDetails } from "./routes";
import { Error } from "../../../common/Error";
import { selectStatus, fetchPeopleStatus, selectPeople } from "../peopleSlice";
import { Pagination } from "../../../common/Pagination/index";

export const PersonList = () => {
	const dispatch = useDispatch();
	const status = useSelector(selectStatus);
	const people = useSelector(selectPeople);

	useEffect(() => {
		dispatch(fetchPeopleStatus());
	}, [dispatch]);

	switch (status) {
		case "loading":
			return <Loading />;
		case "error":
			return <Error />;
		default:
			return (
				<Wrapper>
					<Header>Popular people</Header>
					<PeopleConatiner>
						{people.map(person =>
							<Tile
								to={`/people/${person.id}`}
								key={person.id}>
								<Image
									key={person.id}
									src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} alt="Profile"
								/>
								<Name>{person.name}</Name>
							</Tile>
						)}
					</PeopleConatiner>
					<Pagination />
				</Wrapper>
			)
	}
}