import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './Home';
import partners from './partners';
import Card from './Card';
import AboutUs from './components/AboutUs';
import Awards from './Awards';
import Footer from './components/Footer';
import './App.css';

function createCard(partner) {
  return (
    <Card
      key={partner.id}
      img={partner.imgURL}
      name={partner.name}
      description={partner.description}
    />
  );
}
function App() {
  return (
    <div className="App">
      <div className="hero">
        <Navbar />
        <Home />
      </div>
      <div className="partner-container">
        {partners.map(createCard)}
        <button className="see-more"> &gt; </button>
      </div>
      <div className="awards">
        <Awards />
      </div>
      <div className="about">
        <AboutUs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
