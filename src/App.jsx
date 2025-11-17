import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}