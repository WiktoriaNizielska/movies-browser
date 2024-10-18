import { Button, ButtonContainer, Wrapper, VectorPrevious, VectorNext, TextContainer, TextNormal, TextBold } from "./styled";

export const Pagination = () => (
  <Wrapper>
    <ButtonContainer>
      <Button><VectorPrevious />First</Button>
      <Button><VectorPrevious />Previous</Button>
    </ButtonContainer>
    <TextContainer>
      <TextNormal>Page</TextNormal>
      <TextBold>1</TextBold>
      <TextNormal>of</TextNormal>
      <TextBold>1</TextBold>
    </TextContainer>
    <ButtonContainer>
      <Button>Next<VectorNext /></Button>
      <Button>Last<VectorNext /></Button>
    </ButtonContainer>
  </Wrapper>
);