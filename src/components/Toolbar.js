import {useState} from "react";
import {Portfolio} from "./Portfolio";

export const Toolbar = ({filters, selected, onSelectFilter}) => {
    const [filter, setFilter] = useState(selected)
    const filterBtn = [];

    filters.forEach((f) => {
        filterBtn.push(<button onClick={() => {setFilter(f)}}>{f}</button>)
    })

    return(
        <>
            <h1>{filterBtn}{onSelectFilter(filter)}</h1>
            <div>
                <Portfolio filter={filter}/>
            </div>
        </>
    )
}