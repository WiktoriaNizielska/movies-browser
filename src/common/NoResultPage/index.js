import { Container, Header, NoResultImage } from "./styled";

export const NoResultPage = () => (
  <Container>
    <Header>Sorry, there are no results for “ ”</Header>
    <NoResultImage />
  </Container>
);