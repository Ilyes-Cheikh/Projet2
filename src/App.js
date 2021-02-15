import react from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navb from './Components/Navb';
import ControlledCarousel from './Components/Carousel/Carousel';
import Homepage from'./Pages/Homepage';
import MainRouter from './MainRouter';
import Footer1 from './Components/Footer1';

function App() {
  return (
    <div className="App">
      <Navb/>
      <MainRouter/>
      <hr/>
      <Footer1/>
     </div>
  );
}

export default App;
