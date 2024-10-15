import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { ReactComponent as CameraIcon } from '../images/camera.svg';

export const StyledNavigation = styled.ul`
  background-color: ${({ theme }) => theme.color.woodSmoke};
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0; 
  align-items: center;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  padding: 20px;
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;

  &.active{
      border: 1px solid ${({ theme }) => theme.color.white};
      border-radius: 24px;
      padding: 8px 24px;
    }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
`;

export const Camera = styled(CameraIcon)`
 width: 40px;
 height: 40px;
 color: ${({ theme }) => theme.color.white};
`;