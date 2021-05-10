import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemList from '../ItemList';
import AddItem from '../AddItem';
import * as React from 'react';

export default function Shop() {
  const items: any[] | (() => any[]) = [];
  const [valid, setInvalid] = useState('');
  const [itemsList, setItemsList] = useState(items);
  const [name, setName] = useState('');
  const [desc, setDescription] = useState('');

  function handleAddName(event: { target: { value: React.SetStateAction<string> } }) {
    setName(event.target.value);
  }

  function handleAddDesc(event: { target: { value: React.SetStateAction<string> } }) {
    setDescription(event.target.value);
  }

  function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (name === '' || desc === '') {
      setInvalid('Fields should not be empty!');
    } else {
      const newItem = { id: uuidv4(), name, desc };
      setItemsList([...itemsList, newItem]);
      setName('');
      setDescription('');
      setInvalid('');
    }
  }

  function handleRemove(id: any) {
    const newList = itemsList.filter((item) => item.id !== id);
    setItemsList(newList);
  }

  useEffect(() => console.log(itemsList), [itemsList]);

  return (
    <>
      <AddItem name={name} desc={desc} onNameChange={handleAddName} onDescChange={handleAddDesc} onSubmit={submitHandler} valid={valid} />
      {itemsList.length === 0 ? (
        <div>
          <p>Добавьте первый товар</p>
        </div>
      ) : null}
      <ItemList items={itemsList} onRemove={handleRemove} />
    </>
  );
}
