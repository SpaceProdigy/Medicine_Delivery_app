import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
  styled,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

export const TypographyStyled = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const DescriptionStyled = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonStyled = styled(Button)`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 5px;
  transition: scale 300ms linear;
  &:hover {
    scale: 1.1;
  }
`;

export const WrapperStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CardActionsStyled = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0 10px;
`;

export const RatingStyled = styled(Rating)`
  .MuiRating-iconEmpty {
    color: #aebacb;
  }
`;

export const CardStyled = styled(Card)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme?.card?.cardBackground ?? 'inherit'};
`;

export const WrapperPriceStyled = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContentStyled = styled(CardContent)`
  padding: 5px 10px;
  padding-bottom: 5px !important;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;
