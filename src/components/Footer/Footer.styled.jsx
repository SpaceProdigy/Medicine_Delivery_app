import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  width: calc(100% - 20px);
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 25px -16px 0;
  background-color: #0000001c;
  box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.3);
`;

export const Link = styled.a`
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: color 500ms linear;

  &:hover {
    color: #000000ae;
  }
`;
