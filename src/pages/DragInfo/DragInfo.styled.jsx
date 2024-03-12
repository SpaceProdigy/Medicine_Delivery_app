import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const MoreInfoWrapper = styled.article`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Buttom = styled.button``;

export const Title = styled.h2`
  margin: 0;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const Box = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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

  &.active {
    background-color: yellow;
  }
`;

export const OutletWrapper = styled.div`
  margin-top: 20px;
`;
