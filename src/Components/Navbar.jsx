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
                <li clasNclassNames="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Chi Siamo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Prodotti</a>
                </li>
            </ul>


        </div>

    )
}