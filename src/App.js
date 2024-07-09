//Style imports
import './App.css';

import Header from '../src/components/header/Header';
import Home from '../src/components/home/Home';
import About from '../src/components/about/About.jsx'
import Services from './components/services/Services.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
