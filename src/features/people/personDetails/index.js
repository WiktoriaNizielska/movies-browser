import { Description, Info, InfoContainer, Label, LineWrapper, LongLabel, Name, PersonImage, PersonTile, ShortLabel, Text, Wrapper } from "./styled";
import { usePersonDetails } from "./usePersonDetails";

export const PersonDetails = () => {
  const { personDetails } = usePersonDetails();

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
    </Wrapper>
  );
}