import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <div className='font-bold max-width-[800px] bg-gray-100'>
        <h1 className='mx-auto w-[10%]'>STOMP'D..</h1>
      </div>
      <Navbar />
      <LandingPage />
    </>
  );
}

export default App;
