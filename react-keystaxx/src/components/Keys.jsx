import { useLocation } from "react-router-dom"
export default function Keys() {
    const location = useLocation()
    const key = location.state.key
    return (
        <>
        <div>
            <h1>{key.name}</h1>
            <p>{key.description}</p>
        </div>
        </>
    )
}