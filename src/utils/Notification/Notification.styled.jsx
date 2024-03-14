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
  top: 85px;
  right: 30px;
  padding: 10px 15px;
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
  transition: opacity 500ms linear;
`;
export const Text = styled.p``;

export const MotionReorderItem = styled(Reorder.Item)`
  :first-child {
    margin-top: 0;
  }
  margin-top: 20px;
`;

export const MotionReorderGroup = styled(Reorder.Group)`
  list-style: none;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
`;

export const MotionWrapper = motion(Wrapper);
export const MotionButton = motion(Button);
export const MotionText = motion(Text);
