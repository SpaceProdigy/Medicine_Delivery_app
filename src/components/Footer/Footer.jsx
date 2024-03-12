import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FooterStyled, Link } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Link
        href="https://github.com/SpaceProdigy"
        target="_blank"
        rel="noopener noreferrer"
      >
        SpaceProdigy <FaGithub size={20} />
      </Link>
    </FooterStyled>
  );
};
