import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src="https://m.media-amazon.com/images/I/71df56mLklL._SX3000_.jpg"></img>

          <div className='home__row'>
            <Product id="12321341" title="The Lean Startup: How Today/'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={38.61} image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg" rating={4} />
            <Product id="49538094" title='Canon EOS 90D Digital Camera 18-55 is STM Lens, Black' price={1749.99} image="https://m.media-amazon.com/images/I/71-lfAJPGML._AC_SL1500_.jpg" rating={5}/>
            <Product id="64823026" title='ICETRAX V3 Tungsten Winter Ice Grips for Shoes and Boots - Ice Cleats for Snow and Ice, StayON Toe, Reflective Heel' price={20.49} image="https://m.media-amazon.com/images/I/81DlpqfE7+L._AC_SL1500_.jpg" rating={4}/>
          </div>

          <div className='home__row'>
            <Product id="82904728" title={"Maybelline New York Maybelline Lash Sensational Washable Sky high Mascara, Blackest Black"} price={15.19} image="https://m.media-amazon.com/images/I/71e5-Rxbp7L._AC_SL1500_.jpg" rating={3}/>
            <Product id="63782147" title={"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"} price={24.08} image="https://m.media-amazon.com/images/I/81wgcld4wxL.jpg" rating={5}/>
            <Product id="44729166" title={"Brita Extra Large 18 Cup Filtered Water Dispenser with 1 Standard Filter, Made Without BPA, UltraMax, Grey"} price={49.97} image="https://m.media-amazon.com/images/I/71I4tCIRVbS._AC_SL1500_.jpg" rating={4}/>
            <Product id="37839210" title={"TruffleHunter - White Truffle Oil - Extra Virgin Olive Oil for Cooking & Seasoning - 250 ml"} price={35.15} image="https://m.media-amazon.com/images/I/61LsDruRFML._AC_SL1500_.jpg" rating={5}/>
          </div>

          <div className='home__row'>
            <Product id="56889213" title={"PEDIGREE CHOPPED Adult Wet Dog Food, Ground Dinner Chicken and Filet Mignon, 375g Can (24 Pack)"} price={36.97} image={"https://m.media-amazon.com/images/I/81XJlK9ZwKL._AC_SL1500_.jpg"} rating={4}/>
            <Product id="76729102" title={"Utopia Bedding Bed Sheet Set - 4 Piece Queen Bedding - Soft Brushed Microfiber Fabric - Shrinkage & Fade Resistant - Easy Care (Queen, Grey)"} price={27.89} image="https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_SL1500_.jpg" rating={3}/>
            <Product id="94321847" title="Rocketbook Smart Reusable Notebook - Dot-Grid Eco-Friendly Notebook with 1 Pilot Frixion Pen & 1 Microfiber Cloth Included - Infinity Black Cover, Executive Size (6 x 8.8 inches)" price={41.47} image="https://m.media-amazon.com/images/I/61xGTta1tpL._AC_SL1001_.jpg" rating={3}/>
          </div>

          <div className='home__row'>
            <Product id="57739216" title={"Amazon Basics Collapsible Fabric Storage Cubes Organizer with Handles, Beige - Pack of 6"} price={26.69} image="https://m.media-amazon.com/images/I/916dIt3AmOL._AC_SL1500_.jpg" rating={4}/>
            <Product id="46281982" title={"Isopure Low Carb Protein Powder, 100% Whey Protein Isolate, Flavor: Dutch Chocolate, 1.36 kg (Packaging May Vary)"} price={70.32} image="https://m.media-amazon.com/images/I/61TIHbJ12XL._AC_SL1500_.jpg" rating={4}/>
          </div>

          <div className='home__row'>
            <Product id="45851932" title={"Keychron K8 Tenkeyless Wireless Mechanical Keyboard for Mac with Gateron Brown Switches, Aluminum Frame, Bluetooth RGB Backlit Multitasking Type-C Wired Gaming Keyboard for Windows"} price={132.99} image={"https://m.media-amazon.com/images/I/517VfHmWI6L._AC_SL1200_.jpg"} rating={5}/>
          </div>
        </div>
    </div>
  )
}

export default Home