import React from 'react';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Product from './components/Product';
import Testimoni from './components/Testimoni';

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Product />
      <Features />
      <Testimoni />
      <Footer />
    </>
  );
}

export default App;
