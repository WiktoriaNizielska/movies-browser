import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { Camera, StyledNavigation, StyledNavLink, Title } from "./styled";
import { MovieDetails } from "../features/movies/MovieDetails";

function App() {
  return (
    <HashRouter>
      <nav>
        <StyledNavigation>
        <Title>
          <Camera/>
          Movies Browser
        </Title>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/people">People</StyledNavLink>
          </li>
        </StyledNavigation>
      </nav>
      <Switch>
        <Route path="/movies">
          <MovieDetails />
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
