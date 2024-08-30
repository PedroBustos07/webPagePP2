import './styles/App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import MostRequested from './components/MostRequested';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <MostRequested></MostRequested>
    </>
  );
}

export default App;
