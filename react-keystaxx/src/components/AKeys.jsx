import {Link} from "react-router-dom"
const keys = [
    {id: 1, name: 'A-Form', description: "A-Boards"},
    {id: 2, name: 'A-Form2', description: "A-Boards1"},
    {id: 3, name: 'A-Form3', description: "A-Boards2"},
    {id: 4, name: 'A-Form4', description: "A-Boards3"},
    {id: 5, name: 'A-Form5', description: "A-Boards4"},
    {id: 6, name: 'A-Form6', description: "A-Boards5"},
    {id: 7, name: 'A-Form7', description: "A-Boards6"},
    {id: 8, name: 'A-Form8', description: "A-Boards7"},
    {id: 9, name: 'A-Form9', description: "A-Boards8"},
    {id: 10, name: 'A-Form10', description: "A-Boards9"},
]

export default function AKeys() {
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