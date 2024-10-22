import styled from "styled-components";
import { ReactComponent as VectorIcon } from '../../images/vector.svg';

export const Wrapper = styled.footer`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin: 40px 0 103px;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    gap: 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightBlue};
  padding: 8px 16px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.mineShaft};
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.color.grey};
    color: ${({ theme }) => theme.color.black};
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    gap: 4px;
    padding: 8px 12px;
  }
`;

export const ButtonText = styled.p`
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    display: none;
  }
`;

export const TextContainer = styled.div`
  color: ${({ theme }) => theme.color.darkGrey};
  display: inline-flex;
  gap: 8px;
  font-size: 16px;
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 10px;
    gap: 2px;
  }
`;

export const TextNormal = styled.p`
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: 400;
`;

export const TextBold = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
`;

export const VectorPrevious = styled(VectorIcon)`
  width: 7px;
  height: 11px;
  color: ${({ theme }) => theme.color.blue};
  transform: rotate(180deg);

  &:disabled {
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    width: 5px;
    height: 8px;
  }
`;

export const SecondVectorPrevious = styled(VectorIcon)`
  width: 5px;
  height: 8px;
  color: ${({ theme }) => theme.color.blue};
  transform: rotate(180deg);

  &:disabled {
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
    display: none;
  }
`;

export const VectorNext = styled(VectorIcon)`
  width: 7px;
  height: 11px;
  color: ${({ theme }) => theme.color.blue};
  
  &:disabled {
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    width: 5px;
    height: 8px;
  }
`;

export const SecondVectorNext = styled(VectorIcon)`
  width: 5px;
  height: 8px;
  color: ${({ theme }) => theme.color.blue};
  
  &:disabled {
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
    display: none;
  }
`;