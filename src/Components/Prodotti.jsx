import { useState, useEffect } from "react"

export default function Prodotti() {
    const [prodotti, setProdotti] = useState([])

    return (
        <div>
            <h1>Prodotti</h1>
            <div className="row g-3">
                {prodotti.map((prodotto) => (
                    <div key={prodotto.id}>
                        <div className="card">
                            <img className="card-top" src={prodotto.image} alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{prodotto.title}</h4>
                                <p className="card-text">${prodotto.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}