import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Home from './components/Home';
import Team from './components/Team';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Events />
    <Team />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
