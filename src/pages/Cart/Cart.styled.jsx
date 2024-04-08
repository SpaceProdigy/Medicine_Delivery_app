import { styled } from '@mui/material';
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
