import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemList from '../ItemList';
import AddItem from '../AddItem';
import * as React from 'react';

export default function Shop() {
  const [valid, setInvalid] = useState('');
  const [itemsList, setItemsList] = useState(() => {
    const itemValue = localStorage.getItem('items');
    return itemValue !== null ? JSON.parse(itemValue) : [];
  });
  const [name, setName] = useState('');
  const [desc, setDescription] = useState('');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(itemsList));
  }, [itemsList]);

  useEffect(() => {
    if (itemsList.length === 0) {
      document.title = `Товары отсутствуют`;
    } else if (itemsList.length === 1) {
      document.title = `Добавлен один товар`;
    } else {
      document.title = `Добавлено ${itemsList.length} товаров`;
    }
  });

  function handleAddName(event: { target: { value: React.SetStateAction<string> } }) {
    setName(event.target.value);
  }

  function handleAddDesc(event: { target: { value: React.SetStateAction<string> } }) {
    setDescription(event.target.value);
  }

  function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ name: name, desc: desc }),
    };

    if (name === '' || desc === '') {
      setInvalid('Fields should not be empty!');
    } else {
      fetch('https://online-shop.com/admin/items', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.error(error);
        });
      const newItem = { id: uuidv4(), name, desc };
      setItemsList([...itemsList, newItem]);
      setName('');
      setDescription('');
      setInvalid('');
    }
  }

  function handleRemove(id: any) {
    const newList = itemsList.filter((item: { id: any }) => item.id !== id);
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
