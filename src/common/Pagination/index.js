import { Button, ButtonContainer, Wrapper, VectorPrevious, VectorNext, TextContainer, TextNormal, TextBold, ButtonText, SecondVectorPrevious, SecondVectorNext } from "./styled";

export const Pagination = () => (
  <Wrapper>
    <ButtonContainer>
      <Button>
        <VectorPrevious />
        <SecondVectorPrevious />
        <ButtonText>First </ButtonText>
      </Button>
      <Button>
        <VectorPrevious />
        <ButtonText>Previous</ButtonText>
      </Button>
    </ButtonContainer>
    <TextContainer>
      <TextNormal>Page</TextNormal>
      <TextBold>1</TextBold>
      <TextNormal>of</TextNormal>
      <TextBold>1</TextBold>
    </TextContainer>
    <ButtonContainer>
      <Button>
        <ButtonText>Next</ButtonText>
        <VectorNext />
      </Button>
      <Button>
        <ButtonText>Last</ButtonText>
        <VectorNext />
        <SecondVectorNext />
      </Button>
    </ButtonContainer>
  </Wrapper>
);