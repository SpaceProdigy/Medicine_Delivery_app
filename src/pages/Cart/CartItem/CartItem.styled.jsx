import { OutlinedInput, Typography, styled } from '@mui/material';
import { Reorder, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const MotionItem = styled(Reorder.Item)`
  position: relative;
  display: flex;
  max-width: 400px;
  gap: 10px;
  border: 1px solid
    ${({ theme }) => (theme.palette.type === 'light' ? '#000' : '#fff')};
  border: 1px solid ${props => (props.isactive ? 'yellowgreen' : 'inherit')};

  box-shadow: ${props =>
    props.isactive ? ' 0px 0px 5px 0px rgba(0,241,56,0.45)' : 'inherit'};

  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;

  &:first-of-type {
    margin-top: 0;
  }

  transition: box-shadow 300ms linear;

  &:hover {
    box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.4);
  }
`;

export const ButtonReorder = styled('button')`
  position: absolute;
  right: 0;
  bottom: 0;
  color: #000;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const MotionButtonReorder = motion(ButtonReorder);

export const ButtonClose = styled('button')`
  position: absolute;
  right: 0;
  color: #000;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 300ms linear;

  &:hover {
    color: red;
  }
`;

export const Wrapper = styled('div')`
  position: relative;
  width: calc(100% - 100px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Title = styled(Typography)`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  margin: 0;
`;

export const StyledInput = styled(OutlinedInput)`
  fieldset {
    border-color: rgb(174, 186, 203);
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: color 300ms linear;
  &:hover {
    color: #ffd700;
  }
`;
