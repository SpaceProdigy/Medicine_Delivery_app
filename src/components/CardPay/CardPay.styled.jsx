import { Box, styled } from '@mui/material';
import cardBackgroundImage from '../../images/cardBackground.png';
import { motion } from 'framer-motion';

export const WrapperCard = styled(Box)`
  position: relative;
  width: 100%;
  min-width: 220px;
  max-width: 340px;
  height: 215px;

  background-image: url(${cardBackgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 10px;
  cursor: pointer;
`;

export const WrapperChip = styled(Box)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const WrapperName = styled(Box)`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const WrapperExpiry = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const WrapperNumber = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const WrapperDetected = styled(Box)`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const MotionWrapperCard = motion(WrapperCard);

export const WrapperTape = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlackTape = styled(Box)`
  width: 100%;
  height: 50px;
  background-color: #111;
  margin-top: 15px;
`;

export const CVVTape = styled(Box)`
  width: 50%;
  height: 30px;
  background-color: #f6fbfb;
  margin-top: 7px;
  display: flex;
  align-items: center;
`;
