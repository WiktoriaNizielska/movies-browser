import { } from "../../movies/movieList/styled";
import { Description, Info, InfoContainer, Label, LineWrapper, LongLabel, Name, PersonImage, PersonTile, ShortLabel, Text, Wrapper, Container, GenresContainer, Header, Image, MainPageContainer, MainPageMovie, Rate, RateContainer, Star, TextWrapper, Title, Votes, Year, NoMoviePoster, Section } from "./styled";
import { useMovieCredits } from "./useMovieCredits";
import { usePersonDetails } from "./usePersonDetails";

export const PersonDetails = () => {
  const { personDetails } = usePersonDetails();
  const { cast, crew } = useMovieCredits();
  
  const formatYear = (date) => date.split("-")[0];

  return (
    <Wrapper>
      <PersonTile>
        <PersonImage src={`https://image.tmdb.org/t/p/h632${personDetails.profile_path}`} alt="Profile" />
        <Text>
          <Name >{personDetails.name}</Name>
          <InfoContainer>
            <LineWrapper>
              <LongLabel>Date of birth: </LongLabel>
              <ShortLabel>Birth:</ShortLabel>
              <Info>{personDetails.birthday || "Unavaliable information"}</Info>
            </LineWrapper>
            <LineWrapper>
              <Label>Place of birth: </Label>
              <Info>{personDetails.place_of_birth || "Unavaliable information"}</Info>
            </LineWrapper>
          </InfoContainer>
        </Text>
        <Description>{personDetails.biography || "Unavaliable information"}</Description>
      </PersonTile>
      <Section>
        <Header>Cast({cast.length})</Header>
        <MainPageContainer>
          {cast.map(movie =>
            <MainPageMovie
              key={movie.id}
              to="/movies-browser#/movies"
            >
              {movie.poster_path ?
                (<Image
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                  alt="Poster"
                />)
                : <NoMoviePoster />
              }
              <TextWrapper>
                <Container>
                  <Title>
                    {movie.title}
                  </Title>
                  {movie.release_date ? <Year>{movie.character} ({formatYear(movie.release_date)})</Year> : null}
                  <GenresContainer>

                  </GenresContainer>
                </Container>
                <RateContainer>
                  <Star />
                  <Rate>{movie.vote_average.toFixed(1)}</Rate>
                  <Votes>{movie.vote_count} votes</Votes>
                </RateContainer>
              </TextWrapper>
            </MainPageMovie>
          )}
        </MainPageContainer>

      </Section>
      <Section>
        <Header>Crew({crew.length})</Header>
        <MainPageContainer>
          {crew.map(movie =>
            <MainPageMovie
              key={movie.id}
              to="/movies-browser#/movies"
            >
              {movie.poster_path ?
                (<Image
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                  alt="Poster"
                />)
                : <NoMoviePoster />
              }

              <TextWrapper>
                <Container>
                  <Title>
                    {movie.title}
                  </Title>
                  {movie.release_date ? <Year>{movie.job} ({formatYear(movie.release_date)})</Year> : null}
                  <GenresContainer>

                  </GenresContainer>
                </Container>
                <RateContainer>
                  <Star />
                  <Rate>{movie.vote_average.toFixed(1)}</Rate>
                  <Votes>{movie.vote_count} votes</Votes>
                </RateContainer>
              </TextWrapper>
            </MainPageMovie>
          )}
        </MainPageContainer>
      </Section>
    </Wrapper>
  );
}