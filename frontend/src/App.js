import React from 'react';
import{
  BrowserRouter as Router,
  Routes, 
  Route,
} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


function App() {
  return (
    <>
    <Router> 
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/register' element={<RegisterPage/>}/>
      <Route element={<NotFound/>}/>

    </Routes>
    </Router>
    </>
  );
}

export default App;
