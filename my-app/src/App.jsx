import React from 'react';
import './styles/App.scss';
import './styles/mobile.scss';
import NavBar from './composant/NavBar';
import Banner from './composant/ImageContainer';
import CardContainer from './composant/CardContainer';
import Footer from './composant/Footer';
import { Routes, Route } from 'react-router-dom';
import LogementDetail from './pages/LogementDetail';
import About from './pages/apropos';
import NotFoundPage from './pages/NotFoundPage';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <div className="content-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/logement/:id" element={<LogementDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Banner/>
      <CardContainer />
    </>
  );
}



export default App;
