import styled from 'styled-components';

export const StyledButtonAdd = styled.button`
  display: flex;
  gap: 10px;
  background-color: #53de44;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 500ms linear;

  &:hover {
    background-color: yellow;
  }
`;
