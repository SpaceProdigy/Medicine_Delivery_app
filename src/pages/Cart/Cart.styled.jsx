import { Button, styled } from '@mui/material';
import { Reorder } from 'framer-motion';

export const SectionCart = styled('section')`
  margin-top: 80px;
`;

export const CartWrapper = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 16px;
`;

export const MotionList = styled(Reorder.Group)`
  height: 100%;
  max-height: 500px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  list-style: none;
  overflow-y: auto;
  margin: 20px;
  padding: 16px;
  border: 1px solid
    ${({ theme }) => (theme.type === 'dark' ? '#F3F6F9' : '#111')};
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0 5px 5px 0;
    margin: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0 5px 5px 0;
  }
`;

export const ButtonSabmit = styled(Button)`
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
