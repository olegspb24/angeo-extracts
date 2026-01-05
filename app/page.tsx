'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Products />
      <Blog />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
