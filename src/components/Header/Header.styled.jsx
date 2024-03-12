import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.2);
  background-color: #def1f1;
  margin: 0 -16px;
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  background-color: #000000;
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  transition: background-color 500ms linear, color 500ms linear;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: yellow;
    color: #000000;
  }
  &.active {
    background-color: yellow;
    color: #000000;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;

export const Navigation = styled.nav`
  display: inline-flex;
  gap: 20px;
  margin-left: 16px;
`;

export const WrapperLogo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: 16px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
export const Title = styled.h2`
  margin: 0;
`;
