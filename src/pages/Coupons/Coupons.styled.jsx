import { Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const CouponsSection = styled('section')`
  margin-top: 80px;
`;

export const CouponsList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  gap: 25px;
`;

export const CouponsItem = styled('li')`
  position: relative;
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  list-style: none;
  border: solid 1px ${({ theme }) => theme.palette.secondary.main};
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  transition: transform 300ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  &::before {
    content: ${props => (props.$isCopy ? '"Copied"' : '"Click to copy"')};
    position: absolute;
    top: 5px;
    right: 7px;
    background-color: ${props =>
      props.$isCopy ? 'green' : props.theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.primary.secondary};
    padding: 4px 6px;
    border-radius: 4px;
    font-size: 10px;
    opacity: 0;
    transition: opacity 500ms linear;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const Text = styled(Typography)``;

export const TextDiscount = styled(Typography)``;

export const TextKey = styled(Typography)``;

export const MotionItem = motion(CouponsItem);
