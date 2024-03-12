import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Drug = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 360px;
  height: 270px;
  background-color: #fff;
  box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.1);
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  gap: 5px;
`;

export const Title = styled.h3`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const IngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 3px;
  width: 50%;
  height: 70px;
`;
export const ActiveIngredient = styled.p`
  font-weight: 500;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00000090;
    border-radius: 5px;
  }
`;

export const Image = styled.img`
  height: 150px;
`;

export const Price = styled.p`
  font-weight: 500;
`;

export const Accent = styled.p`
  font-weight: 400;
  font-size: 12px;
`;
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;
