import './App.css';
import Nav from './Nav';
import About from './About';
import Overlay from './Overlay';
import HomeImg from './HomeImg';
import WhyUs from './WhyUs';
import Help from './Help';
import Footer from './Footer';
import Bottom from './Bottom';

function App() {
  return (
    <div className="app">
          <Nav className='nav'/>
          <Overlay />
          <HomeImg className='home__img'/>
          <About />
          <WhyUs />
          <Help />
          <Footer />
          <Bottom className='bottom'/>
    </div>
  );
}

export default App;
