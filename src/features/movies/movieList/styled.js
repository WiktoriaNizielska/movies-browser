import styled from "styled-components";
import { ReactComponent as StarIcon } from '../../../images/star.svg';

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

export const MainPageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  justify-content: center;

  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const MainPageMovie = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow.tile};
  border-radius: 5px;
  display: grid;
  grid-template-rows: auto 1fr;
  align-self: start;
  gap: 16px;
  height: 100%;
  transition: 0.5s;

  &:hover{
    transform: translateY(-3%);
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    grid-template-columns: auto 1fr;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  display: block;
  margin: auto;

  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    width: 100%;
  }

  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
    max-width: 114px;
    flex-shrink: 0;
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto ;
  align-items: end;
  gap: 10px;
`;

export const Container = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    gap: 4px;
    margin: 10px 0 0;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    margin: 0 0 8px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.woodSmoke};
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 16px;
  }
`;

export const Year = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 13px;
  }
`;

export const GenresContainer = styled.ul`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.woodSmoke};
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const GenreTag = styled.li`
  background-color: ${({ theme }) => theme.color.grey};
  padding: 8px 16px;
  border-radius: 5px;
  margin: 0;
  list-style: none;
  

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    font-size: 13px;
    padding: 4px 8px;
  }
`;

export const RateContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 13px;
  }
`;

export const Rate = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodSmoke};
`;

export const Votes = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Star = styled(StarIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.yellow};

  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    width: 16px;
    height: 16px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    width: 16px;
    height: 16px;
  }
`;


