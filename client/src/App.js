import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage';
import Navbar from './components/navbar';
import Logo from '../src/Assets/sneakers/logo2.png'
import {BrowserRouter,Switch, Route} from "react-router-dom"
import SignIn from './components/signin';
import Signup from './components/signup';
import Shop from './components/shop';

function App() {
  return (
    <>
      <div className='px-20 h-screen'>
          <div className='font-bold max-width-[800px] '>
              <img className='mx-auto w-[10%] h-20' src={Logo}  />
          </div>
          <BrowserRouter>
          <Navbar />
            <Switch>
                <Route exact path='/' >
                    <LandingPage />
                </Route>
                <Route exact path='/signin' >
                    <Signup />
                </Route>
                <Route exact path='/shop' >
                    <Shop />
                </Route>
            </Switch>
          </BrowserRouter>
            
      </div>
    </>
  );
}

export default App;