import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 500;
`;

export const StyleLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  padding: 5px 15px;
  border: solid 1px #000;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 300ms linear;

  &:hover {
    background-color: yellow;
  }
`;
