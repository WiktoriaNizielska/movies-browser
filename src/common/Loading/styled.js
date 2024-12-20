import styled from "styled-components";
import { ReactComponent as SpinnerIcon } from '../../images/spinner.svg';

export const Container = styled.div`
  text-align: center;
  margin: 56px auto;
  max-width: 1368px;
  
  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    margin: 0 16px;
  }
`;

export const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodSmoke};
  text-align: left;
`;

export const Spinner = styled(SpinnerIcon)`
  width: 91px;
  height: 91px;
  color: ${({ theme }) => theme.color.black};
  animation: 1s linear normal infinite rotation;
  margin-top: 120px;

@keyframes rotation {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
`;

