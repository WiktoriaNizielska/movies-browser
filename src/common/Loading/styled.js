import styled from "styled-components";
import { ReactComponent as SpinnerIcon } from '../../images/spinner.svg';

export const Container = styled.div`
  text-align: center;
  margin: auto;
`;

export const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodSmoke};
`;

export const Spinner = styled(SpinnerIcon)`
  width: 91px;
  height: 91px;
  color: ${({ theme }) => theme.color.black};
  animation: 1s linear normal infinite rotation;

@keyframes rotation {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
`;

