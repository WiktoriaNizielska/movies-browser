import { useSelector } from "react-redux";
import { Container, Header, NoResultImage } from "./styled";
import { selectMovieQuery } from "../SearchingMovieContainer/searchingSlice";

export const NoResultPage = () => {
  const query = useSelector(selectMovieQuery);

  return (
    <Container>
      <Header>Sorry, there are no results for “{query}”</Header>
      <NoResultImage />
    </Container>
  );
}


