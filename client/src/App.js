import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage';
import Navbar from './components/navbar';
import Logo from '../src/Assets/sneakers/logo2.png'

function App() {
  return (
    <>
      <div className='px-10 h-screen'>
          <div className='font-bold max-width-[800px] '>
            <img className='mx-auto w-[10%] h-20' src={Logo}  />
          </div>
          <Navbar />
          <LandingPage />
      </div>
    </>
  );
}

export default App;
