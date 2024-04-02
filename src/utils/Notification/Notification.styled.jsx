import { Reorder, motion } from 'framer-motion';
import styled from 'styled-components';

const activeColors = props => {
  switch (props.$type) {
    case 'info':
      return '#8de2fe';
    case 'success':
      return '#89ff11';
    case 'warning':
      return '#f3ef38';
    case 'error':
      return '#ff7745';
    default:
      return '#89ff11';
  }
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background-color: ${activeColors};
  border-radius: 5px 20px 5px 20px;
  box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Button = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -10px;
  top: -10px;
  border: none;
  background-color: ${activeColors};
  padding: 1px;
  border-radius: 50%;
  cursor: pointer;
  transition: scale 500ms linear, color 500ms linear;

  &:hover {
    scale: 1.2;
    color: #ff0000;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Text = styled.p`
  margin: 5px;
`;

export const BoxTime = styled.div`
  max-width: 100%;
  position: absolute;
  top: -3px;
  left: 0;
  height: 10px;
  border-radius: 10px 5px 0 0;
  background-color: ${activeColors};
`;

export const MotionReorderItem = styled(Reorder.Item)`
  :first-child {
    margin-top: 0;
  }
  margin-top: 20px;
`;

export const MotionReorderGroup = styled(Reorder.Group)`
  list-style: none;
  position: fixed;
  z-index: 100;
  top: 70px;
  right: 20px;
  margin: 0;
  margin-left: 20px;
  padding: 0;
`;

export const MotionWrapper = motion(Wrapper);
export const MotionButton = motion(Button);
export const MotionLineTime = motion(BoxTime);
