import { Link } from "react-router-dom"
import nav from "../lib/dataList"
export default function List(){
    return(
        <ul className="list">
           {nav.map((items) => {
            return (
                <li>
                   <Link to={items.path}>{items.title}</Link>
                </li>
            )
           })}
        </ul>
    )
}

