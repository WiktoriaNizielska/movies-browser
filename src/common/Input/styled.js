import styled from "styled-components";
import { ReactComponent as SearchIcon } from '../../images/search.svg';

export const SearchContainer = styled.div`
 position: relative;
 max-width: 432px;
 width: 100%;

 @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
      max-width: 100%;
  }
`;

export const Search = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.waterloo};
  position: absolute;
  top: 12px;
  left: 24px;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
      width: 16px;
      height: 16px;
      top: 17px;
      left: 18px;
  }
`;

export const Input = styled.input`
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.white};
  padding: 12px 12px 12px 60px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  display: block;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.color.waterloo};
  }
`;
