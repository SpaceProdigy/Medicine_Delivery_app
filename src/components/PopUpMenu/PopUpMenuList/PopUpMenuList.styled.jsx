import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const NanigationStyled = styled(Box)`
  list-style: none;
  position: fixed;
  left: 0;
  top: 35px;
  padding: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${({ theme }) =>
    theme?.appBar?.popUpMenuBackground ?? 'inherit'};
  z-index: 1000;
`;

export const MotionNanigationStyled = motion(NanigationStyled);
