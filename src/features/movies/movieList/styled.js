import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
`;

export const MainPageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-gap: 10px;
  justify-content: center;
`;

export const MainPageMovie = styled.div`

`;

export const Header = styled.header`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  margin: 56px 0 24px;
  text-align: left;
`;
