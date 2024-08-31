import './styles/App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import MostRequested from './components/MostRequested';
import AdvertisingPoster from './components/AdvertisingPoster';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <MostRequested></MostRequested>
      <AdvertisingPoster></AdvertisingPoster>
    </>
  );
}

export default App;
