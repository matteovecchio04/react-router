import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import ChiSiamo from "./Components/ChiSiamo"
import Prodotti from "./Components/Prodotti"
import { BudgetProvider } from "./Components/BudgetContext"

export default function App() {

  return (
    <>
      <BudgetProvider>
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
      </BudgetProvider>

    </>
  )
}