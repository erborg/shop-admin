import Item from '../Item';
import * as React from 'react';

export default function ItemList(props: { items: any[]; onRemove: (arg0: any) => void }) {
  return (
    <ul className="shop">
      {props.items.map((item, index) => (
        <li key={index}>
          <Item info={item} />
          <button onClick={() => props.onRemove(item.id)} className="btn-delete">
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
