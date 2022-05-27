import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsDetail from './components/CardsDetail';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/:id' element={<CardsDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
