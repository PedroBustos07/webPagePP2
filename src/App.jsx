import './styles/App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import MostRequested from './components/MostRequested';
import AdvertisingPoster from './components/AdvertisingPoster';
import PreviewAboutUs from './components/PreviewAboutUs';
import ChoiseYourExperience from './components/ChoiseYourExperience';
import LocationRestaurant from './components/LocationRestaurant';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <MostRequested></MostRequested>
      <AdvertisingPoster></AdvertisingPoster>
      <PreviewAboutUs></PreviewAboutUs>
      <ChoiseYourExperience></ChoiseYourExperience>
      <LocationRestaurant></LocationRestaurant>
    </>
  );
}

export default App;
