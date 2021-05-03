import React, {useEffect, useState} from "react";
import uuid from "react-uuid";
import ItemList from "./ItemList";
import AddItem from "./AddItem";

export default function Shop() {
    const items = [];
    const [valid, setInvalid] = useState("")
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
            setInvalid('Fields should not be empty!')
        } else {
            const newItem = {id: uuid(), name, desc};
            setItemsList([...itemsList, newItem])
            setName("")
            setDescription("")
            setInvalid("")
        }
    }

    function handleRemove(id) {
        const newList = itemsList.filter((item) => item.id !== id);
        setItemsList(newList)
    }

    useEffect(() => console.log(itemsList), [`${itemsList}`])

    return (
        <>
            <AddItem name={name} desc={desc} onNameChange={handleAddName} onDescChange={handleAddDesc}
                     onSubmit={submitHandler} valid={valid}/>
            {itemsList.length === 0 ? (<div>
                    <p>Добавьте первый товар</p>
                </div>
            ) : null}
            <ItemList items={itemsList} onRemove={handleRemove}/>
        </>
    );
}
