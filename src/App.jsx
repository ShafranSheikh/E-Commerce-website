import React,{ useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserLogin from './components/UserLogin/UserLogin';
import UserSignup from './components/UserLogin/UserSignup';
import { Router } from 'express';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header />
    <Router>
      <Routes>
        <Route path='/UserLogin' element={<UserLogin />} />
        <Route path='/UserSignup' element={<UserSignup />} />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
