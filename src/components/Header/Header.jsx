import React from 'react';
import {
  HeaderStyled,
  Logo,
  Navigation,
  Title,
  WrapperLogo,
  StyledLink,
  Link,
} from './Header.styled';
import logo from './../../images/logo.png';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  return (
    <HeaderStyled>
      <Navigation>
        <StyledLink to="/" state={{ from: location }}>
          Shop
        </StyledLink>
        <StyledLink to="/cart" state={{ from: location }}>
          Shopping card
        </StyledLink>
        <StyledLink to="/history" state={{ from: location }}>
          History
        </StyledLink>
        <StyledLink to="/coupons" state={{ from: location }}>
          Coupons
        </StyledLink>
      </Navigation>
      <WrapperLogo>
        <Link to="/">
          <Title>Drugs 24</Title>
        </Link>
        <Logo src={logo} />
      </WrapperLogo>
    </HeaderStyled>
  );
};
