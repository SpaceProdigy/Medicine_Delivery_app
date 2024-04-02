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

export const PopUpMenuList = ({ location, isOpen, setIsOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {
        <MotionNanigationStyled
          id="menu"
          initial={false}
          variants={navigation}
          animate={isOpen ? 'open' : 'closed'}
        >
          <motion.ul
            variants={list}
            animate={isOpen ? 'open' : 'closed'}
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
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            ))}
          </motion.ul>
        </MotionNanigationStyled>
      }
    </AnimatePresence>
  );
};
