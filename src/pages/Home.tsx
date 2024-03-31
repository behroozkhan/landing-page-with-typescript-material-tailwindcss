import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Price from '../components/Price';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
        <div 
        // className='bgVector'
        >
            <Navbar/>
            <Hero/>
        </div>
        <div>
        <About/>
        </div>
        <div>
          <Services/> 
        </div>
        <div>
          <Price/>
        </div>
    </div>
  )
}

export default Home;