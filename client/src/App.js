import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import TodoLists from './components/TodoLists/TodoLists';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lists' element={<TodoLists />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;