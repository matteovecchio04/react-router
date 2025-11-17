import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import ChiSiamo from "./Components/ChiSiamo"
import Prodotti from "./Components/Prodotti"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}