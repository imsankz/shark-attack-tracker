import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CountryPage from './pages/CountryPage'
import About from './pages/About'
import Statistics from './pages/Statistics'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
