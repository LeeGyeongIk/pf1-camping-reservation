import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './template/header/NavBar';
import Footer from './template/footer/Footer';
import Main from './Router/Main';
import MainInfo from './Router/MainInfo';
import Location from './Router/Location';
import LookAround from './Router/LookAround';
import SURO from './Router/CampingSite/SURO';
import SINEO from './Router/CampingSite/SINEO';
import KIMHAE from './Router/CampingSite/KIMHAE';
import ReservationInfo from './Router/ReservationInfo';
import Reservation from './Router/Reservation';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MainInfo" element={<MainInfo />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/LookAround" element={<LookAround />} />
        <Route path="/SURO" element={<SURO />} />
        <Route path="/SINEO" element={<SINEO />} />
        <Route path="/KIMHAE" element={<KIMHAE />} />
        <Route path="/ReservationInfo" element={<ReservationInfo />} />
        <Route path="/Reservation" element={<Reservation />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;