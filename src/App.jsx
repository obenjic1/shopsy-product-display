import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/products';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import ShowCase from './components/showCase/showCase';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <ShowCase />
      <Subscribe/>
    </div>
  );
}

export default App;
