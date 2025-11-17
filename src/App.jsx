import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./Components/Navbar"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}