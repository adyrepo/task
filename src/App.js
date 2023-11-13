import './style/App.css';
import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import Card from "./components/Card"
import Calculator from "./components/Calculator"
import Forms from './components/Forms'
import Footer from './components/Footer'
// import gsap from 'gsap'

function App() {
  const [cardScroll, setCardScroll] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [docData, setDocData] = useState({ width: 0, height: 0 })

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setCardScroll(window.scrollY / 12)
    })
    window.addEventListener("resize", (e) => {
      setCardScroll(window.scrollY / 12)
      setDocData({ width: window.innerWidth, height: window.innerHeight })
    })
      setDocData({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  const mouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <div className="App" onMouseMove={(e) => mouseMove(e)}>
        <Navbar />

        <Card 
        width={docData.width}
        height={docData.height}
        cardScroll={cardScroll}
        mouseData={mouse}
        />

        <Calculator 
        width={docData.width} 
        height={docData.height} 
        savePercentage={0.1} 
        totalSave={0.9} />

        <Forms />

        <Footer width={docData.width}/>
      </div>

    </>
  );
}

export default App;
