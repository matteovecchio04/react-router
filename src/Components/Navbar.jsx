import { Link } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "./BudgetContext";

export default function Navbar() {

    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    let buttonText = "";

    if (budgetMode === true) {
        buttonText = "Disattiva Modalità Budget";
    } else {
        buttonText = "Attiva Modalità Budget";
    }

    return (
        <div className="p-3 d-flex justify-content-between">
            <ul className="nav">
                <li className="nav-item">
                    <h1>E-Commerce</h1>
                </li>
            </ul>

            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/chi-siamo">Chi Siamo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/prodotti">Prodotti</Link>
                </li>

                <li className="nav-item">
                    <button
                        className="btn btn-warning"
                        onClick={() => setBudgetMode(!budgetMode)}>
                        {buttonText}
                    </button>
                </li>
            </ul>


        </div>

    )
}