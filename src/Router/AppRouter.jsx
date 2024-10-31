import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import AboutUsPage from '../pages/aboutUs/AboutUsPage';
import Menu from '../pages/menu/Menu';
import { ProductosProvider } from '../context/ProductosProvider';
import { CarritoProvider } from '../context/CarritoProvider';
import { CartPage } from '../pages/ShoppingCartPage/CartPage';

export default function AppRouter() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/AboutUs' element={<AboutUsPage></AboutUsPage>} />
          <Route path='/Menu' element={<Menu></Menu>}></Route>
          <Route path='/carrito' element={<CartPage></CartPage>}></Route>
          <Route path='/*' element={<Navigate to='/'></Navigate>} />
        </Routes>
      </CarritoProvider>
    </ProductosProvider>
  );
}
