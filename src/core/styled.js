import styled from "styled-components";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";
import { ReactComponent as CameraIcon } from '../images/camera.svg';

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.color.black};
  margin: 0;
  list-style: none;
  padding: 0; 
`;

export const Container = styled.div`
  max-width: 1368px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 60px;
  justify-content: space-between;

  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
      margin: 0 16px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
      flex-wrap: wrap;
      justify-content: center;
      padding: 16px 0;
      gap: 15px;
  }

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
      display: grid;
      grid-template-rows: 1fr auto;
      padding: 0 16px 16px ;
      gap: 0;
      grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  
  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
      width: 100%;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
      gap: 20px;
  }
  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
      gap: 0px;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
        gap: 10px;
  }
  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
      gap: 0px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  padding: 20px;
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  gap: 16px;

  &.active{
      border: 1px solid ${({ theme }) => theme.color.white};
      border-radius: 24px;
      padding: 8px 24px;

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
        border-radius: 29px;
        padding: 8px 12px;
    }
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
      font-size: 12px;
      line-height: 18px;
  }
`;

export const Title = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  flex-wrap: nowrap;
  margin: 23px 0px 23px 0px;
  text-decoration: none;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    font-size: 13px;
    line-height: 16.9pxpx;
    letter-spacing: -0.5px;
    gap: 8px;
    margin: 32px 0px 33px 0px;
  }
`;

export const Camera = styled(CameraIcon)`
  width: 40px;
  height: 40px;

 @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    width: 17px;
    height: 17px;
  }
`;






