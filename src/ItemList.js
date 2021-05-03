import Item from "./Item";
import React from "react";

export default function ItemList(props) {
    return <ul className="shop">
        {props.items.map((item, index) => (
            <li key={index}>
                <Item info={item}/>
                <button onClick={() => props.onRemove(item.id)} className="btn-delete">Удалить</button>
            </li>
        ))}
    </ul>
}
