import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import MainContent from '../../components/mainContent/MainContent';
import MostRequested from '../../components/mostRequested/MostRequested';
import AdvertisingPoster from '../../components/advertisingPoster/AdvertisingPoster';
import PreviewAboutUs from '../../components/previewAboutUs/PreviewAboutUs';
import ChoiseYourExperience from '../../components/choiseYourExperience/ChoiseYourExperience';
import LocationRestaurant from '../../components/locationRestaurant/LocationRestaurant';
import Footer from '../../components/footer/Footer';
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
