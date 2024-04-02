import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
export const ComponentRating = ({ product, theme }) => {
  return (
    <Rating
      name="read-only"
      value={product?.rating?.rate}
      readOnly
      emptyIcon={
        <StarIcon
          style={{ opacity: 0.55, color: theme.palette.secondary.main }}
          fontSize="inherit"
        />
      }
    />
  );
};
