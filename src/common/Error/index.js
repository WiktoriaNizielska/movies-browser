import { Button, Caption, Container, Text, Warning } from "./styled";
import warning from "../../images/warning.png"
export const Error = () => (
  <Container>
    <Warning src={warning} alt="warningSign" />
    <Caption>Ooops! Something went wrong... </Caption>
    <Text>Please check your network connection and try again</Text>
    <Button to="/movies-browser#/movies">
      Back to home page
    </Button>
  </Container>
);