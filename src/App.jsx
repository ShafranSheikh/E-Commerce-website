import React,{ useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header />
    </>
  )
}

export default App
