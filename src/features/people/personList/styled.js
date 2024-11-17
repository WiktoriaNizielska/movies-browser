import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1368px;
  margin: auto;

  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    margin: 0 16px;
  }
`;

export const Header = styled.header`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodSmoke};
  margin: 56px 0 24px;
  text-align: left;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    font-size: 18px;
    margin: 24px 0 12px;
  }
`;

export const PeopleConatiner = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  justify-content: center;

  @media(max-width:${({ theme }) => theme.breakpoint.tabletHorizontalMax}px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled(Link)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow.tile};
  border-radius: 5px;
  transition: 0.5s;
  text-decoration: none;

  &:hover{
    transform: translateY(-3%);
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    padding: 14px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    padding: 8px;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  display: block;
  margin: auto;
  width: 100%;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.woodSmoke};
  text-align: center;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 14px;
  }
`;



