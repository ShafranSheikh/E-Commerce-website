import React,{ useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AdBanner from './components/HomeSection/AdBanner/AdBanner';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header />
    <AdBanner />
    <Footer />
    </>
  )
}

export default App
