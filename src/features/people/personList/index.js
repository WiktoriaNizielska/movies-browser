import { useDispatch, useSelector } from "react-redux";
import { Header, Image, Name, PeopleConatiner, Tile, Wrapper } from "./styled";
import { useEffect } from "react";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { selectStatus, fetchPeopleStatus, selectPeople } from "./peopleSlice";
import { Pagination } from "../../../common/Pagination/index";
import { NoPersonPoster } from "../../../common/NoPersonPoster/styled";
import { selectPage, startPage } from "../../../common/Pagination/paginationSlice";
import { selectMovieQuery } from "../../../common/SearchingMovieContainer/searchingSlice";
import { SearchingPeopleContainer } from "../../../common/SearchingPeopleContainer";

export const PersonList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const people = useSelector(selectPeople);
  const page = useSelector(selectPage);
  const query = useSelector(selectMovieQuery)

  useEffect(() => {
    dispatch(startPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPeopleStatus(page));
  }, [dispatch, page]);

  return (
    status === "loading" ? <Loading /> :
      status === "error" ? <Error /> :
        query === null ?
          <Wrapper>
            <Header>Popular people</Header>
            <PeopleConatiner>
              {people.map(person =>
                <Tile
                  to={`/people/${person.id}`}
                  key={person.id}>
                  {person.profile_path ?
                    <Image
                      key={person.id}
                      src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} alt="Profile"
                    />
                    : <NoPersonPoster />
                  }
                  <Name>{person.name}</Name>
                </Tile>
              )}
            </PeopleConatiner>
            <Pagination />
          </Wrapper>
          :
          <SearchingPeopleContainer />
  )
}



