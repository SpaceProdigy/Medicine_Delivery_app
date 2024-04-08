import LocalMallIcon from '@mui/icons-material/LocalMall';
import { StyledButtonSabmit } from './ButtonSabmit.styled';

export const ButtonSabmit = ({ name, play, icon }) => {
  return (
    <StyledButtonSabmit
      variant="contained"
      size="large"
      type="submit"
      onClick={play}
    >
      {name ?? 'Order'}
      {icon ?? <LocalMallIcon />}
    </StyledButtonSabmit>
  );
};
