import { Link } from "react-router-dom"
import XKeys from "./XKeys"
import AKeys from "./AKeys"


export default function Products(){

    return(
        <>
        <div className="products-page">
            <div className="products-xkeysHead">
                <h1 className="products-xkeysHead" id="logo-name">X - KeyS</h1>
                <p> "Where Durability Meets Quality"</p>
            </div>
            <XKeys />
            <div className="products-akeysHead">
                <h1 className="products-akeysHead" id="logo-name">A - KeyS</h1>
                <p> "Quality Custom Artisan Keyboards"</p>
            </div>
            <AKeys />
        </div>
        </>
    )
}