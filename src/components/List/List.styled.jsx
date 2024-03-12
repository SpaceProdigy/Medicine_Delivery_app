import styled from 'styled-components';

export const ListStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 470px;
  padding: 20px;
  margin-right: 14px;
  box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.2);
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
