import { useDispatch, useSelector } from "react-redux"
import { Name, Wrapper } from "./styled"
import { fetchPeopleStatus, selectPeople, selectStatus } from "../peopleSlice";
import { useEffect } from "react";
import { Loading } from "../../../common/Loading"
import { Error } from "../../../common/Error";
import { toPeopleDetails } from "../routes";
import { Link, } from "react-router-dom/cjs/react-router-dom";

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
     
     <ul>
							{people.map(({ id,  name }) => (
								<li key={id}>
									<Link to={toPeopleDetails({ id: id })}>
										<Name name={name}>
					{name}
											 </Name>
									</Link>
								</li>
							))}
						</ul>
      
    </Wrapper>
  )
}}