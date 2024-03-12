import styled from 'styled-components';

export const CouponsSection = styled.section`
  margin-top: 30px;
`;

export const CouponsList = styled.ul`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CouponsItem = styled.li`
  position: relative;
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  list-style: none;
  border: solid 1px #000;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.2);
  transition: transform 500ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: ${props => (props.$isCopy ? '"Copied"' : '"Click to copy"')};
    position: absolute;
    top: 5px;
    right: 7px;
    background-color: ${props => (props.$isCopy ? 'green' : '#000')};
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 10px;
    opacity: 0;
    transition: opacity 500ms linear;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const Text = styled.h2`
  margin: 0;
`;

export const TextDiscount = styled.p`
  font-weight: 500;
`;

export const TextKey = styled.p`
  font-weight: 500;
`;
