import { motion } from 'framer-motion';
import { ListItemText } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from 'components/App';

// ICONS
import HomeIcon from '@mui/icons-material/Home';
import DiscountIcon from '@mui/icons-material/Discount';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LocalMallIcon from '@mui/icons-material/LocalMall';

// VARIANTS
import { variants } from './framerMotionVariants';
import { BoxStyled, NavLinkStyled, Wrapper } from './PopUpMenuItem.styled';

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const PopUpMenuItem = ({
  index,
  name,
  route,
  location,
  setIsOpen,
  isOpen,
}) => {
  const { play } = useContext(MyContext);
  const style = { color: ` ${colors[index]}` };

  const include = () => {
    if (location.pathname.includes('/shop')) {
      return String(
        location.pathname.includes('/shop') === route.includes('/shop')
      );
    } else {
      return String(location.pathname === route);
    }
  };

  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <BoxStyled active={include()}>
          <NavLinkStyled
            onClick={() => {
              play();
              setIsOpen(!isOpen);
            }}
            to={route}
            state={{ from: location }}
          >
            <Wrapper style={style}>
              {name === 'Home' ? (
                <HomeIcon />
              ) : name === 'Shop' ? (
                <LocalMallIcon />
              ) : name === 'Coupons' ? (
                <DiscountIcon />
              ) : (
                <HistoryEduIcon />
              )}

              <ListItemText primary={name} />
            </Wrapper>
          </NavLinkStyled>
        </BoxStyled>
      </motion.li>
    </>
  );
};
