import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={< Login/>}></Route>
    <Route path='/signUp' element={< SignUp/>}></Route>
    <Route path='/Home' element={< Home/>}></Route>
  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
