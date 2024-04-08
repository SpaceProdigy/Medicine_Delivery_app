import { Suspense, lazy, createContext, useState, useEffect } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';

import { Footer } from './Footer/Footer';

import { NotFound } from 'pages/NotFound/NotFound';
import { Loader } from './Loader/Loader';
import { AnimatePresence, motion } from 'framer-motion';
import PrimaryAppBar from './AppBar/AppBar';

import { PopUpMenuList } from './PopUpMenu/PopUpMenuList/PopUpMenuList';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProductsIdArr,
  selectTheme,
  updateOrder,
} from '../redux/localOperation';

// SOUND
import soundClick from '../Sounds/Button.mp3';
import useSound from 'use-sound';
import { Disconnected } from './Disconnected/Disconnected';

// ROUTS
const Home = lazy(() => import('../pages/Home/Home'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const ProductInfo = lazy(() => import('../pages/ProductInfo/ProductInfo'));
const Coupons = lazy(() => import('../pages/Coupons/Coupons'));
const History = lazy(() => import('../pages/History/History'));
const Shop = lazy(() => import('../pages/Shop/Shop'));

export const MyContext = createContext();

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
};

const stTransition = { duration: 1, ease: 'easeIn' };

export const App = ({ toggleTheme, theme }) => {
  const selectedProductsIds = useSelector(selectProductsIdArr);
  const location = useLocation();
  const localTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const [play] = useSound(soundClick, { volume: 0.05 });
  const [isNotifi, setIsNotyfi] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newOrder, setNewOrder] = useState(selectedProductsIds);

  useEffect(() => {
    toggleTheme(localTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNewOrder(selectedProductsIds);
  }, [selectedProductsIds]);

  useEffect(() => {
    if (location.pathname !== '/cart') {
      dispatch(updateOrder(newOrder));
    }
  }, [dispatch, location.pathname, newOrder]);

  return (
    <>
      <style>
        {`
          body {
            overflow: ${isMenuOpen ? 'hidden' : 'auto'};
          }
        `}
      </style>
      <AnimatePresence>
        <MyContext.Provider
          value={{
            isNotifi,
            setIsNotyfi,
            play,
            theme,
            newOrder,
            setNewOrder,
            selectedProductsIds,
          }}
        >
          <Container
            onClick={evn => {
              if (isMenuOpen) {
                evn.target.id !== 'menu' && setIsMenuOpen(false);
                evn.target.id !== 'menu' && play();
              }
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100vh',
              padding: 0,
              width: '100%',
              maxWidth: 1920,
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={stTransition}
              variants={variants}
            >
              <PrimaryAppBar
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
                location={location}
                toggleTheme={toggleTheme}
                theme={theme}
              />
              <PopUpMenuList
                location={location}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </motion.div>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={stTransition}
                style={{
                  position: 'absolute',
                  background: '#7777772f',
                  width: '100vw',
                  height: '100vh',
                  zIndex: 100,
                }}
              />
            )}
            <main style={{ flex: 1, width: '100%' }}>
              <Suspense fallback={<Loader />}>
                {navigator.onLine ? (
                  <>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/shop/:categories" element={<Shop />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/product/:id" element={<ProductInfo />} />

                      <Route path="/history" element={<History />} />
                      <Route path="/coupons" element={<Coupons />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Outlet />
                  </>
                ) : (
                  <Disconnected />
                )}
              </Suspense>
            </main>
            <div style={{ flexShrink: 0, width: '100%', maxWidth: 1920 }}>
              <Footer />
            </div>
          </Container>
        </MyContext.Provider>
      </AnimatePresence>
    </>
  );
};
