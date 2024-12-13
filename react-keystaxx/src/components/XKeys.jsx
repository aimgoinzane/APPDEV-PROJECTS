import {Link} from "react-router-dom"
const keys = [
    {id: 1, name: 'X-Tra', description: "X-Boards"},
    {id: 2, name: 'X-Tra2', description: "X-Boards1"},
    {id: 3, name: 'X-Tra3', description: "X-Boards2"},
    {id: 4, name: 'X-Tra4', description: "X-Boards3"},
    {id: 5, name: 'X-Tra5', description: "X-Boards4"},
    {id: 6, name: 'X-Tra6', description: "X-Boards5"},
    {id: 7, name: 'X-Tra7', description: "X-Boards6"},
    {id: 8, name: 'X-Tra8', description: "X-Boards7"},
    {id: 9, name: 'X-Tra9', description: "X-Boards8"},
    {id: 10, name: 'X-Tra10', description: "X-Boards9"},
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