import React from 'react';
import UrlForm from '../components/urlForm';
import Hero from '../components/hero';
import UrlList from '../components/urlList';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      <Hero />
      <UrlForm />
      <UrlList />
      <Footer />
    </>
  );
}

export default Home;
