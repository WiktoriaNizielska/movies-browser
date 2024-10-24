import { HashRouter, Redirect, Route, Switch, } from "react-router-dom/cjs/react-router-dom";
import {
  Camera,
  Container,
  NavLinkContainer,
  StyledNavigation,
  StyledNavLink,
  Title,
  Wrapper
} from "./styled";
import { MovieContainer } from "../common/MovieContainer";
import { MovieList } from "../features/movies/movieList/index";
import { SearchInput } from "../common/Input";

function App() {
  return (
    <HashRouter>
      <StyledNavigation>
        <Container>
          <Wrapper>
            <Title>
              <Camera />
              Movies&nbsp;Browser
            </Title>
            <NavLinkContainer>
              <li>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/people">People</StyledNavLink>
              </li>
            </NavLinkContainer>
          </Wrapper>
          <SearchInput />
        </Container>
      </StyledNavigation>
      <Switch>
        <Route path="/movie/:id">
          <MovieContainer />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/people">
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
