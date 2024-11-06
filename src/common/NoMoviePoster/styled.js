import styled from "styled-components";
import cameraIcon from '../../images/camera.svg';

export const NoMoviePoster = styled.div`
  max-height: 750px;
  max-width: 500px;
  aspect-ratio: 2 / 3;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  object-fit: cover;
  text-align: center;
  background-image: url(${cameraIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
    width: 114px;
  }
`;