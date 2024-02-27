import React from 'react';
import './App.css';
import logo from './1.png';
import logo1 from './3.png';
import logo2 from'./2.png';
import head from './logo.png';
function App() {
  return (
    
<div className="container">
  <main className="main">
    <section className="award-section">
      <img src={logo} alt="Award image" className="award-image" />
    </section>
    <section className="products-section">
      <img src={head} alt="Header image" className="header-image" />
      <p>
            <strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
          </p>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
      <img src={logo2} alt="Award image" className="award-image1" />
      <p>
        Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
      </p>
    </section>
    
    <section className="footer-image-section">
    <p className='don'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      <img src={logo1} alt="Footer" className="footer-image" />
      <p className='don1'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
    </section>
  </main>
  <div className="footer-line"></div>
  <p className='don3'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
</p>
<p className=''>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
  <footer className="footer">
  
  <footer className="footer">
  <p>&copy; 2024 | Toll-Free: 1800 200 1234 | <a href="https://www.facebook.com/cripumps">Facebook</a> | <a href="https://www.crigroups.com">Website</a></p>
  <div className="footer-line"></div>
</footer>



  </footer>
</div>



  );
}

export default App;
