import styled from 'styled-components';

export const SideBar = styled.aside`
  box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.2);

  width: 250px;
  height: 470px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00000090;
    border-radius: 5px;
  }
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

export const Button = styled.button`
  color: #000000;
  background-color: transparent;
  width: 100%;
  padding: 5px 0;
  border: #000000 solid 1px;
  border-radius: 5px;
  transition: background-color 500ms linear;
  cursor: pointer;

  &:hover {
    background-color: lime;
  }
`;
