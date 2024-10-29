import { useDispatch, useSelector } from "react-redux"
import { Header, Image, Name, PeopleConatiner, Tile, Wrapper } from "./styled"
import { fetchPeople, selectPeopleState } from "../peopleSlice";
import { useEffect } from "react";
import { Pagination } from "../../../common/Pagination";
import { Loading } from "../../../common/Loading"
import { Error } from "../../../common/Error";

export const PersonList = () => {
  const dispatch = useDispatch();
  const { loading, error, people } = useSelector(selectPeopleState);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
    <Wrapper>
      {loading ? <Loading /> :
        error ? <Error /> :
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
      }
    </Wrapper>
  )
}