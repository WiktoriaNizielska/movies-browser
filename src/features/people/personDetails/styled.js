import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1368px;
  margin: auto;

  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    margin: 0 16px;
  }
`;

export const PersonTile = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  gap: 40px;
  margin-top: 56px;
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