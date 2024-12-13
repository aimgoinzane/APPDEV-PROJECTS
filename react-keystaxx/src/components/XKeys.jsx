import {Link} from "react-router-dom"
const keys = [
    {id: 1, name: 'X-Tra', description: "LOL"},
    {id: 2, name: 'X-Tra2', description: "LOL1"},
    {id: 3, name: 'X-Tra3', description: "LOL2"},
    {id: 4, name: 'X-Tra4', description: "LOL3"},
    {id: 5, name: 'X-Tra5', description: "LOL3"},
    {id: 6, name: 'X-Tra6', description: "LOL3"},
    {id: 7, name: 'X-Tra7', description: "LOL3"},
    {id: 8, name: 'X-Tra8', description: "LOL3"},
    {id: 9, name: 'X-Tra9', description: "LOL3"},
    {id: 10, name: 'X-Tra10', description: "LOL3"},
]

export default function XKeys() {
    return (
        <>
            <ul className="products-body">
                {keys.map((key) => (
                    <li key = {key.id}>
                        <Link to = {`/products/${key.id}`} state = {{key}}>
                            <img src="https://placehold.co/200" />
                            <strong> {key.name} </strong>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}