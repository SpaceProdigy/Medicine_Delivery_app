import { Button, styled } from '@mui/material';

export const StyledButtonSabmit = styled(Button)`
  transition: all 300ms linear;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => (theme.type === 'dark' ? '#111' : '#F3F6F9')};
  background-color: ${({ theme }) =>
    theme.type === 'dark' ? '#007d31' : '#6fbc65ff'};
  &:hover {
    background-color: ${({ theme }) =>
      theme.type === 'dark' ? '#bdcc09ff' : '#e6f068ff'};
    color: ${({ theme }) => (theme.type === 'dark' ? '#F3F6F9' : '#111')};
  }
  &:disabled {
    background-color: ${({ theme }) =>
      theme.type === 'dark' ? '#555' : '#f0f0f0'};
    color: ${({ theme }) => (theme.type === 'dark' ? '#777' : '#888')};
  }
`;
