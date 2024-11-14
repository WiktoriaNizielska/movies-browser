import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonContainer, Wrapper, VectorPrevious, VectorNext, TextContainer, TextNormal, TextBold, ButtonText, SecondVectorPrevious, SecondVectorNext } from "./styled";
import { selectPage, setPage } from "./paginationSlice";
import { useMaxPageNumber } from "./useMaxPageNumber";

export const Pagination = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const maxPageNumber = useMaxPageNumber();

  return (
    <Wrapper>
      <ButtonContainer>
        <Button
          disabled={page === 1}
          onClick={() => { dispatch(setPage(1)) }}
        >
          <VectorPrevious $disabled={page === 1} />
          <SecondVectorPrevious $disabled={page === 1} />
          <ButtonText>First </ButtonText>
        </Button>
        <Button
          disabled={page === 1}
          onClick={() => { dispatch(setPage(page - 1)) }}
        >
          <VectorPrevious $disabled={page === 1} />
          <ButtonText>Previous</ButtonText>
        </Button>
      </ButtonContainer>
      <TextContainer>
        <TextNormal>Page</TextNormal>
        <TextBold>{page}</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>{maxPageNumber}</TextBold>
      </TextContainer>
      <ButtonContainer>
        <Button
          disabled={page === maxPageNumber}
          onClick={() => { dispatch(setPage(page + 1)) }}
        >
          <ButtonText>Next</ButtonText>
          <VectorNext $disabled={page === maxPageNumber} />
        </Button>
        <Button
          disabled={page === maxPageNumber}
          onClick={() => { dispatch(setPage(maxPageNumber)) }}
        >
          <ButtonText>Last</ButtonText>
          <VectorNext $disabled={page === maxPageNumber} />
          <SecondVectorNext $disabled={page === maxPageNumber} />
        </Button>
      </ButtonContainer>
    </Wrapper>)
};