import { Description, Info, InfoContainer, Label, LineWrapper, Name, PersonImage, PersonTile, Text, Wrapper } from "./styled";
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
            <Label>Date of birth: </Label>
            <Info>{personDetails.birthday || "Unavaliable information"}</Info>
          </LineWrapper>
          <LineWrapper>
            <Label>Place of birth: </Label>
            <Info>{personDetails.place_of_birth || "Unavaliable information"}</Info>
          </LineWrapper>
          </InfoContainer>
          <Description>{personDetails.biography || "Unavaliable information"}</Description>
        </Text>
      </PersonTile>
    </Wrapper>
  );
}