import styled from "styled-components";
import { ReactComponent as NoResult } from "../../images/noResult.svg"

export const Container = styled.div`
 max-width: 1368px;
 margin: 56px auto;
 text-align:center;
`;

export const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodSmoke};
  text-align: left;
`;

export const NoResultImage = styled(NoResult)`
  width: 668px;
  height: 508px;
`;