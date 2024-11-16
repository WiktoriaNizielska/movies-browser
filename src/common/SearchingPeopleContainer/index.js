import { useSelector } from "react-redux";
import { Header, Image, Name, PeopleConatiner, Tile, Wrapper, } from "./styled";
import { selectError, selectLoading, selectMovieQuery, selectSearchedPersons, } from "../SearchingMovieContainer/searchingSlice";
import { Pagination } from "../Pagination";
import { NoPersonPoster } from "../NoPersonPoster/styled";
import { Loading } from "../Loading";
import { Error } from "../Error";

export const SearchingPeopleContainer = () => {
  const query = useSelector(selectMovieQuery);
  const searchedPerson = useSelector(selectSearchedPersons);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    loading ? <Loading /> :
      error ? <Error /> :
        <>
          <Wrapper>
            <Header>Search results for "{query}" </Header>
            <PeopleConatiner>
              {searchedPerson.map(person =>
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
        </>
  )
};