import * as React from 'react';

export default function AddItem(props: {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  name: string | number | readonly string[] | undefined;
  onNameChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  desc: string | number | readonly string[] | undefined;
  onDescChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  valid: string;
}) {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="name">Название: </label>
        <input type="text" id="name" value={props.name} placeholder="Название товара" className="textfield" onChange={props.onNameChange} />
      </div>
      <div>
        <label htmlFor="desc">Описание: </label>
        <input type="text" id="desc" value={props.desc} placeholder="Описание товара" className="textfield" onChange={props.onDescChange} />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid.length !== 0 ? props.valid : null}</div>
        <input type="submit" className="btn-basic" value="Добавить" />
      </div>
    </form>
  );
}
