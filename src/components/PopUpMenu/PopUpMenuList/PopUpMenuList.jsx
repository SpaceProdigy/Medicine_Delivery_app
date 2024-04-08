import { AnimatePresence, motion } from 'framer-motion';
import { PopUpMenuItem } from '../PopUpMenuItem/PopUpMenuItem';
import { MotionNanigationStyled } from './PopUpMenuList.styled';
import { list, navigation } from './framerMotionVariants';

const directions = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Shop',
    route: '/shop/categories',
  },
  {
    name: 'History',
    route: '/history',
  },
  {
    name: 'Coupons',
    route: '/coupons',
  },
];

export const PopUpMenuList = ({ location, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {
          <MotionNanigationStyled
            id="menu"
            initial={false}
            variants={navigation}
            animate={isMenuOpen ? 'open' : 'closed'}
          >
            <motion.ul
              variants={list}
              animate={isMenuOpen ? 'open' : 'closed'}
              style={{
                listStyle: 'none',
                padding: 0,
              }}
            >
              {directions.map(({ name, route }, index) => (
                <PopUpMenuItem
                  index={index}
                  route={route}
                  name={name}
                  key={index}
                  location={location}
                  setIsMenuOpen={setIsMenuOpen}
                  isMenuOpen={isMenuOpen}
                />
              ))}
            </motion.ul>
          </MotionNanigationStyled>
        }
      </AnimatePresence>
    </>
  );
};
