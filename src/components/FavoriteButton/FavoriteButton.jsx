import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Fade } from '@mui/material';
import { ButtonFavoriteStyled } from './FavoriteButton.styled';

export const FavoriteButton = ({
  favorite,
  dispatch,
  toggleFavorite,
  id,
  play,
}) => {
  return (
    <>
      <Fade in={favorite?.includes(id)}>
        <ButtonFavoriteStyled
          onClick={() => {
            dispatch(toggleFavorite(id));
            play();
          }}
        >
          <FavoriteIcon fontSize="large" />
        </ButtonFavoriteStyled>
      </Fade>
      <Fade in={favorite?.includes(id) === false}>
        <ButtonFavoriteStyled
          onClick={() => {
            dispatch(toggleFavorite(id));
            play();
          }}
        >
          <FavoriteBorderIcon fontSize="large" />
        </ButtonFavoriteStyled>
      </Fade>
    </>
  );
};
