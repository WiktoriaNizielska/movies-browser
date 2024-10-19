import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import {
  Camera,
  Container,
  NavLinkContainer,
  StyledNavigation,
  StyledNavLink,
  Title
} from "./styled";
import { MovieContainer } from "../common/MovieContainer";
import { MovieList } from "../features/movies/movieList/index";
import { SearchInput } from "../common/Input";

function App() {
  return (
    <HashRouter>
      <StyledNavigation>
        <Container>
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
          <SearchInput />
        </Container>
      </StyledNavigation>
      <Switch>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/movie">
          <MovieContainer />
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
