import styled from "styled-components";
import profileIcon from '../../images/profile.svg';

export const NoPersonPoster = styled.div`
  max-height: 750px;
  max-width: 500px;
  aspect-ratio: 2 / 3;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  object-fit: cover;
  text-align: center;
  background-image: url(${profileIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28%;
  grid-row: span 2;
  `;