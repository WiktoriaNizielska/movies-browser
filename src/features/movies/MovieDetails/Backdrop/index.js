import { BackdropWrapper, Votes, Rate, MovieTitle, TitleConatiner, RateWrapper, Container, RateMax, Star } from "./styled";

export const Backdrop = ({ backgroundURL, title, rate, votes }) => (
  <Container>
    <BackdropWrapper $background={backgroundURL}
    >
      <TitleConatiner>
        <MovieTitle>{title}</MovieTitle>
        <RateWrapper>
          <Rate> <Star /> {rate}</Rate>
          <RateMax>&nbsp; / 10</RateMax>
        </RateWrapper>
        <Votes>{votes} votes</Votes>
      </TitleConatiner>
    </BackdropWrapper>
  </Container>
);