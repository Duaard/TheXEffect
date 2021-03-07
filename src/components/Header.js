import React, { useState } from 'react';
import CreateForm from './CreateForm';
import './Header.css';

import { Modal } from 'antd';
import { FaList, FaTh, FaPlusSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Header(props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="header">
      <div className="header-pane-left">
        <span>The X-Effect</span>
        <div className="header-buttons">
          <ul>
            <li>
              <FaList />
            </li>
            <li>
              <FaTh />
            </li>
            <li
              onClick={() => {
                setVisible(true);
              }}
            >
              <AddCardIcon />
            </li>
          </ul>
          <AddCardModal
            {...{
              visible,
              handleCancel: () => {
                setVisible(false);
              },
            }}
          />
        </div>
      </div>
      <div className="header-pane-right">
        <span>Eduard Likwong</span>
        <span>Unmarked: 0</span>
      </div>
    </div>
  );
}

function AddCardIcon() {
  return (
    <IconContext.Provider value={{ color: 'green' }}>
      <div>
        <FaPlusSquare />
      </div>
    </IconContext.Provider>
  );
}

function AddCardModal(props) {
  const { visible, handleCancel } = props;

  function onCancel() {
    handleCancel();
  }

  return (
    <Modal title="Basic modal" visible={visible} onCancel={onCancel}>
      <CreateForm />
    </Modal>
  );
}

export default Header;
