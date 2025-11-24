import { useState, useEffect, useContext } from "react"
import { BudgetContext } from "./BudgetContext"

export default function Prodotti() {
    const [prodotti, setProdotti] = useState([])

    const { budgetMode } = useContext(BudgetContext)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            // downloads products from server
            .then((resp) => resp.json())
            // makes the data readble to JS
            .then((data) => {
                setProdotti(data)
                // saves data in state so that react can show them
            })
    }, [])

    let showProducts = []
    if (budgetMode === true) {
        showProducts = prodotti.filter((prodotto) => prodotto.price <= 30)
    }
    else {
        showProducts = prodotti
    }

    return (
        <div>
            <h1>Prodotti</h1>
            <div className="row">
                {prodotti.map((prodotto) => (
                    <div key={prodotto.id} className="col-12 col-lg-3 col-md-6 col-sm-4">
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