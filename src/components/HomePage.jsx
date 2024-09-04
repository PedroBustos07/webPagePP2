import '../styles/homePage.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import MostRequested from './MostRequested';
import AdvertisingPoster from './AdvertisingPoster';
import PreviewAboutUs from './PreviewAboutUs';
import ChoiseYourExperience from './ChoiseYourExperience';
import LocationRestaurant from './LocationRestaurant';
import Footer from './Footer';
export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <MostRequested></MostRequested>
      <AdvertisingPoster></AdvertisingPoster>
      <PreviewAboutUs></PreviewAboutUs>
      <ChoiseYourExperience></ChoiseYourExperience>
      <LocationRestaurant></LocationRestaurant>
      <Footer></Footer>
    </>
  );
}
