import { motion } from 'framer-motion';
import styled from 'styled-components';

export const EmptyWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const MotionEmptyWrapper = motion(EmptyWrapper);

export const Image = styled.img`
  width: 120px;
`;

export const MotionEmptyImage = motion(Image);
