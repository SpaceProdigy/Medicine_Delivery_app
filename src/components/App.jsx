import { Suspense, lazy, createContext, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { NotFound } from 'pages/NotFound/NotFound';
import { Loader } from './Loader/Loader';
import { Notification } from '../utils/Notification/Notification';

const Home = lazy(() => import('../pages/Home/Home'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const DrugInfo = lazy(() => import('../pages/DragInfo/DragInfo'));
const ActiveIngredientComponen = lazy(() =>
  import('./DrugInfoComponents/ActiveIngredient/ActiveIngredientComponen')
);

const DescriptionComponent = lazy(() =>
  import('./DrugInfoComponents/Description/DescriptionComponent')
);

const InstructionsComponent = lazy(() =>
  import('./DrugInfoComponents/Instructions/InstructionsComponent')
);

const Coupons = lazy(() => import('../pages/Coupons/Coupons'));
const History = lazy(() => import('../pages/History/History'));

export const MyContext = createContext();

export const App = () => {
  const [isNotifi, setIsNotyfi] = useState([]);

  return (
    <>
      <MyContext.Provider value={{ isNotifi, setIsNotyfi }}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/drugInfo/:id" element={<DrugInfo />}>
              <Route path="description" element={<DescriptionComponent />} />
              <Route path="instructions" element={<InstructionsComponent />} />
              <Route
                path="activeIngredient"
                element={<ActiveIngredientComponen />}
              />
            </Route>
            <Route path="/history" element={<History />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Outlet />
        </Suspense>

        <Footer />
      </MyContext.Provider>
      <Notification isNotifi={isNotifi} setIsNotyfi={setIsNotyfi} />
    </>
  );
};
