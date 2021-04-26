import React, {useState} from "react";
import Item from "./Item.js";
import uuid from "react-uuid";

export default function Shop() {
    const items = [];
    const [error, setError] = useState("")
    const [itemsList, setItemsList] = useState(items)
    const [name, setName] = useState("")
    const [desc, setDescription] = useState("")

    function handleAddName(event) {
        setName(event.target.value)
    }

    function handleAddDesc(event) {
        setDescription(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        if (name === '' || desc === '') {
            setError('Fields should not be empty!')
        } else {
            const newItem = itemsList.concat({id: uuid(), name, desc});
            setItemsList(newItem)
            setName("")
            setDescription("")
            setError("")
        }
    }

    function handleRemove(id) {
        const newList = itemsList.filter((item) => item.id !== id);
        setItemsList(newList)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Название: </label>
                    <input type="text" id="name" value={name} placeholder="Название товара" className="textfield"
                           onChange={handleAddName}/>
                </div>
                <div>
                    <label htmlFor="desc">Описание: </label>
                    <input type="text" id="desc" value={desc} placeholder="Описание товара" className="textfield"
                           onChange={handleAddDesc}
                    />
                </div>
                <div className="form-footer">
                    <div className="validation">{error.length !== 0 ? error : null}</div>
                    <input type="submit" className="btn-basic" value="Добавить"/>
                </div>
            </form>

            <div>{itemsList.length === 0 ? (
                <p>Добавьте первый товар</p>
            ) : null}

            </div>

            <ul className="shop">
                {itemsList.map((item, index) => (
                    <li key={index}>
                        <Item info={item}/>
                        <button onClick={() => handleRemove(item.id)} className="btn-delete">Удалить</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
