import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutUsPage from '../components/AboutUsPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} />
      <Route path='/AboutUs' element={<AboutUsPage></AboutUsPage>} />
      <Route path='/*' element={<Navigate to='/'></Navigate>} />
    </Routes>
  );
}
