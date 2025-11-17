import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="p-3 d-flex justify-content-between">
            <ul className="nav">
                <li className="nav-item">
                    <h1>E-Commerce</h1>
                </li>
            </ul>

            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/chi-siamo">Chi Siamo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/prodotti">Prodotti</Link>
                </li>
            </ul>


        </div>

    )
}