import { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { NotFound } from 'pages/NotFound/NotFound';
import { Loader } from './Loader/Loader';
import Coupons from 'pages/Coupons/Coupons';

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

export const App = () => {
  return (
    <>
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
          <Route path="/coupons" element={<Coupons />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};
