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
  display: flex;
  gap: 40px;
  margin-top: 56px;
`;

export const PersonImage = styled.img`
  border-radius: 5px;
  max-height: 560px;
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const LineWrapper = styled.div`
 display: flex;
 gap: 10px;
 margin: 0;
 
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.darkGrey};
  margin: 0;
 
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: justify;
`;