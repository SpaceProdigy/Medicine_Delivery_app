import { AnimatePresence } from 'framer-motion';
import { MotionEmptyImage, MotionEmptyWrapper } from './EmptyComponent.styled';

import cartEmpty from '../../../images/empty-cart.png';
import { Typography } from '@mui/material';

export const EmptyComponent = () => {
  return (
    <AnimatePresence>
      <MotionEmptyWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <MotionEmptyImage
          src={cartEmpty}
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: [-200, 100, -100, 50, -50, 25, -25, 0],
            opacity: [0.5, 1],
          }}
          exit={{ opacity: 0 }}
          transition={{
            ease: 'linear',
            duration: 5,
          }}
        />
        <Typography variant="h6" component="p" align="center">
          Cart is empty add product
        </Typography>
      </MotionEmptyWrapper>
    </AnimatePresence>
  );
};
