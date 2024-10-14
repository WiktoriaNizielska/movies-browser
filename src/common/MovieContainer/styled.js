import styled from "styled-components";
import { ReactComponent as StarIcon } from '../../images/star.svg';

export const MovieImage = styled.img`
`;
export const MovieContent = styled.div`
  padding-left: 40px;
  font-weight: 400;
`;
export const Header = styled.header`
  font-weight: 600;
  padding-bottom: 24px;
  font-size: 36px;
`;

export const Subtitle = styled.div`
  padding-bottom: 24px;
  font-size: 22px;
`;

export const Data = styled.div`
  padding-bottom: 24px;
  font-weight: 400;
`;

export const DateProduction = styled.div``;

export const DateRelease = styled.div``;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
  margin: -8px;
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.color.grey};
  padding: 8px 16px;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;
`;

export const Rate = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`;
export const Description = styled.p`
  margin: 0;
`;
export const Star = styled(StarIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.yellow};
`;





