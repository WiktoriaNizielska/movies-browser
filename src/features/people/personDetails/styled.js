import styled from "styled-components";
import { ReactComponent as StarIcon } from '../../../images/star.svg';
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Wrapper = styled.main`
  max-width: 1368px;
  margin: 56px auto 220px;
  display: grid;
  grid-template-rows: auto;
  gap: 64px;

  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    margin: 56px 16px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    margin: 23px 10px;
  }
`;

export const PersonTile = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  gap: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    padding: 20px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    padding: 16px;
    gap: 16px;
  }
`;

export const PersonImage = styled.img`
  border-radius: 5px;
  max-height: 560px;
  grid-row: span 2;

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    max-height: 440px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    grid-row: span 1;
    max-height: 300px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    max-height: 163px;
  }
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    gap: 16px;
  }
`;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.woodSmoke};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    gap: 10px;
  }
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    gap: 10px;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 0;

 @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    flex-wrap: wrap;
    row-gap: 2px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    row-gap: 4px;
  }
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.darkGrey};
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 12px;
    line-height: 14.4px;
  }
`;

export const LongLabel = styled(Label)`
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    display: none;
  }
`;

export const ShortLabel = styled(Label)`
  
  @media(min-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    display: none;
  }
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
  font-weight: 400;
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 12px;
    line-height: 14.4px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: justify;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    grid-column: span 2;

  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 14px;
    line-height: 22.4px;
  }
`;

export const Section = styled.section`
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
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
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

export const MainPageMovie = styled(Link)`
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
  text-decoration: none;

  &:hover{
    transform: translateY(-3%);
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    grid-template-columns: auto 1fr;
    padding: 9px;
    row-gap: 0;
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
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto ;
  align-items: end;
  gap: 10px;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    gap: 0;
  }
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
    margin: 0;
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
  margin: 8px 0;
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

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 11px;
    padding: 3px 7px;
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
    flex-wrap: wrap;
  }
`;

export const Rate = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodSmoke};

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    margin: 2px 0 0;
  }
`;

export const Votes = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    margin: 0;
  }
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