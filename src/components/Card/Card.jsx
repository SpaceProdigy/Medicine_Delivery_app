import { useContext } from 'react';
import { MyContext } from 'components/App';

// MUI
import { Box, CardActionArea } from '@mui/material';

// REDUX
import { selectfavorite, toggleFavorite } from '../../redux/localOperation';
import { useDispatch, useSelector } from 'react-redux';

// ICONS
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// COMPONENTS
import {
  CardActionsStyled,
  CardContentStyled,
  CardStyled,
  RatingStyled,
  StyledLink,
  TypographyStyled,
  WrapperPriceStyled,
  WrapperStyled,
} from './Card.styled';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { AddButton } from './AddButton/AddButton';

export default function ProductCard({ image, title, price, rating, id }) {
  const { play } = useContext(MyContext);
  const dispatch = useDispatch();
  const favorite = useSelector(selectfavorite);

  return (
    <CardStyled>
      <FavoriteButton
        favorite={favorite}
        dispatch={dispatch}
        toggleFavorite={toggleFavorite}
        id={id}
        play={play}
      />

      <CardActionArea onClick={() => play()}>
        <StyledLink to={`/product/${id}`}>
          <Box
            component="div"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: 'top',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '200px',
            }}
            alt={title}
          />

          <CardContentStyled>
            <TypographyStyled variant="button" component="h3">
              {title}
            </TypographyStyled>
          </CardContentStyled>
        </StyledLink>
      </CardActionArea>

      <CardActionsStyled>
        <AddButton play={play} id={id} title={title} dispatch={dispatch} />

        <WrapperStyled>
          <RatingStyled
            name="size-small"
            value={rating?.rate ?? 0}
            size="small"
            readOnly
          />
          <WrapperPriceStyled>
            <TypographyStyled variant="subtitle1" component="p">
              {price?.toFixed(2)}
            </TypographyStyled>
            <div style={{ transition: 'all 1s ease' }}>
              <AttachMoneyIcon fontSize="inherit" />
            </div>
          </WrapperPriceStyled>
        </WrapperStyled>
      </CardActionsStyled>
    </CardStyled>
  );
}
