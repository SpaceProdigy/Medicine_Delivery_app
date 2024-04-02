import styled from 'styled-components';

export const FooterStyled = styled.footer`
  max-width: 1920px;
  width: 100%;
  padding: 20px 20px 15px 10px;

  box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.3);
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 5px;
  cursor: pointer;
  color: inherit;
  transition: scale 500ms linear;

  &:hover {
    scale: 1.03;
  }
`;

export const BoxTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;
