import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import AboutUsPage from '../pages/aboutUs/AboutUsPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} />
      <Route path='/AboutUs' element={<AboutUsPage></AboutUsPage>} />
      <Route path='/*' element={<Navigate to='/'></Navigate>} />
    </Routes>
  );
}
