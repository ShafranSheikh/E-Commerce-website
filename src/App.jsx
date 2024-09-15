import React,{ useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header />
    <Footer />
    </>
  )
}

export default App
