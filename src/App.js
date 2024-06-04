import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Polling from './Components/Polling';
import NavBar from './Components/Navbar';
import RangeOutput from './Components/RangeOutput';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={< Login/>}></Route>
    <Route path='/signUp' element={< SignUp/>}></Route>
    <Route path='/Home' element={< Home/>}></Route>
    <Route path='/Polling' element={< Polling/>}></Route>
    <Route path='/Navbar' element={< NavBar/>}></Route>
    <Route path='/RangeOutput' element={< RangeOutput/>}></Route>

  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
