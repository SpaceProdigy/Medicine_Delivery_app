import { FaCartPlus } from 'react-icons/fa';
import { StyledButtonAdd } from './ButtonAdd.styled';

export const ButtonAdd = ({ onClick }) => {
  return (
    <StyledButtonAdd onClick={onClick}>
      add to Cart <FaCartPlus size={20} />
    </StyledButtonAdd>
  );
};
