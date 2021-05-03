import React from "react";

export default function AddItem(props) {
    return <form onSubmit={props.onSubmit}>
        <div>
            <label htmlFor="name">Название: </label>
            <input type="text" id="name" value={props.name} placeholder="Название товара" className="textfield"
                   onChange={props.onNameChange}/>
        </div>
        <div>
            <label htmlFor="desc">Описание: </label>
            <input type="text" id="desc" value={props.desc} placeholder="Описание товара" className="textfield"
                   onChange={props.onDescChange}/>
        </div>
        <div className="form-footer">
            <div className="validation">{props.valid.length !== 0 ? props.valid : null}</div>
            <input type="submit" className="btn-basic" value="Добавить"/>
        </div>
    </form>
}
