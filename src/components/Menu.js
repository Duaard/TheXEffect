import React, { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import './Menu.css';

function Menu(props) {
  const { items } = props;
  const [active, setActive] = useState(false);

  function handleMenuClick() {
    setActive(!active);
  }

  const itemView = <MenuItemsList items={items} />;

  return (
    <div>
      <FaEllipsisH onClick={handleMenuClick} />
      {active ? itemView : null}
    </div>
  );
}

function MenuItemsList({ items }) {
  return (
    <div className="menu-items-list">
      {items.map((item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
}

function MenuItem({ item }) {
  return (
    <div className="menu-item" onClick={item.onClickHandler}>
      {item.value}
    </div>
  );
}

export default Menu;
