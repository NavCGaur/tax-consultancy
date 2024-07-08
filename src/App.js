import './App.css';
import Header from '../src/components/header/Header';
import Home from '../src/components/home/Home';
import About from '../src/components/about/About.jsx'
import Services from './components/services/Services.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
