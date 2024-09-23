import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './Components/Hero'
import Tentang from './Components/Tentang'
import Produk from './Components/Produk'
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <div>
        <Navbar />
        <Hero />
        <Produk />
        <Tentang />
        <Footer />
    </div>

    </>
  )
}

export default App
