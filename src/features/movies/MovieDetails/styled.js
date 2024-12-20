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

export const MovieTile = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  gap: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 24px;

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    row-gap: 0;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    padding: 20px;
    row-gap: 24px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    padding: 16px;
    gap: 16px;
  }
`;

export const MoviePoster = styled.img`
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
  gap: 20px;

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    gap: 4px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    gap: 8px;
  }
`;

export const TileTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.woodSmoke};
  }
`;

export const Year = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 13px;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    gap: 0;
  }

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

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
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

export const LongInfo = styled(Info)`

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    display: none;
  }
`;

export const ShortInfo = styled(Info)`

  @media(min-width:${({ theme }) => theme.breakpoint.mobileS}px){
    display: none;
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

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    font-size: 13px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 10px;
  }
`;

export const GenreTag = styled.li`
  background-color: ${({ theme }) => theme.color.grey};
  padding: 8px 16px;
  border-radius: 5px;
  margin: 0;
  list-style: none;
  

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    padding: 4px 8px;
  }
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  gap: 8px;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 13px;
    flex-wrap: wrap;
  }
`;

export const SmallStar = styled(StarIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.yellow};

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  font-weight: 500;
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 13px;
    font-weight: 600;
  }
`;


export const MaxRate = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: 400;
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    display: none;
  }
`;

export const Votes = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.color.black};

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 13px;
    line-height: 22.4px;
    color: ${({ theme }) => theme.color.waterloo};
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

export const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  text-align: left;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    font-size: 20px;
  }
`;

export const PersonContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PersonTile = styled(Link)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow.tile};
  border-radius: 5px;
  height: 100%;
  transition: 0.5s;
  text-decoration: none;

  &:hover{
    transform: translateY(-3%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
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

export const PersonName = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.woodSmoke};
  text-align: center;
  margin-bottom: 8px;
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileXS}px) {
    font-size: 12px;
  }
`;

export const Character = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
    font-size: 13px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileXS}px) {
    font-size: 11px;
  }
`;

