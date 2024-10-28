import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Container = styled.div`
  text-align: center;
  margin: auto;
  color: ${({ theme }) => theme.color.woodSmoke};
  max-width: 426px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

export const Warning = styled.img`
  width: 100px;
  height: 90px;
  margin-top: 180px;

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    margin-top: 110px;
  }
`;

export const Caption = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

export const Text = styled.h2`
  font-size: 22px;
  font-weight: 500;
`;

export const Button = styled(Link)`
  padding: 16px 24px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white} ;
  background-color: ${({ theme }) => theme.color.blue};
  display: inline-block;
  margin-bottom: 30px;
  text-decoration: none;
`;
