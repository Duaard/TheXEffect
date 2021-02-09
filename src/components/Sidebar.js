import React, { useEffect, useState } from 'react';
import './Sidebar.css';

function CreateCard(props) {
  const [whys, setWhys] = useState(['', '', '']);
  function addInput() {
    const nWhys = [...whys];
    nWhys.push('');
    setWhys(nWhys);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const card = {
      title: e.target.title.value,
      whys: whys,
      grid: [...Array(49)],
    };
    props.handleSubmit(e, card);
  }

  function handleTextInput(e) {
    const idx = e.target.attributes.name.value;
    let nWhys = [...whys];
    nWhys[idx] = e.target.value;
    setWhys(nWhys);
  }

  return (
    <div className="card-creation-container">
      <form className="card-creation" onSubmit={handleSubmit}>
        <div className="sidebar-row">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" />
        </div>
        {whys.map((why, idx) => {
          return (
            <div key={idx} className="sidebar-row">
              <label htmlFor={idx}>{`Why ${idx + 1}:`}</label>
              <input type="text" name={idx} onChange={handleTextInput} />
            </div>
          );
        })}
        <div className="sidebar-row">
          <button type="button" onClick={addInput}>
            Add why(s)
          </button>
          <input type="submit" value="Create Card" />
        </div>
      </form>
    </div>
  );
}

function EditCard(props) {
  const { selectedCard } = props;
  const [title, setTitle] = useState('');
  const [whys, setWhys] = useState([]);

  useEffect(() => {
    if (selectedCard == null || Object.keys(selectedCard).length === 0) return;
    setWhys(selectedCard.whys);
    setTitle(selectedCard.title);
  }, [selectedCard]);

  if (selectedCard == null || Object.keys(selectedCard).length === 0) {
    // There's no selected card
    return (
      <div className="card-edit-container">
        <h3>Click a card title to edit</h3>
      </div>
    );
  }

  function handleDelete(e) {
    // Deletes a card
    props.handleCardDelete(e);
  }

  function handleSave(e) {
    props.handleCardUpdate(e, {
      ...selectedCard,
      title,
      whys,
    });
  }

  function handleOnTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleOnWhyChange(e, idx) {
    // Copy the whys
    const cWhys = [...whys];
    cWhys[idx] = e.target.value;
    setWhys(cWhys);
  }

  return (
    <div className="card-creation-container">
      <h3>Edit Card</h3>
      <form className="card-creation">
        <div className="sidebar-row">
          <label htmlFor="title">Title:</label>
          <input name="title" value={title} onChange={handleOnTitleChange} />
        </div>
        {whys.map((why, idx) => {
          return (
            <div key={idx} className="sidebar-row">
              <label htmlFor={idx}>{`Why ${idx + 1}:`}</label>
              <input
                type="text"
                name={idx}
                value={why}
                onChange={(e) => handleOnWhyChange(e, idx)}
              />
            </div>
          );
        })}
        <div className="sidebar-row">
          <button type="button" onClick={handleDelete}>
            Delete Card
          </button>
          <button type="button" onClick={handleSave}>
            Save Card
          </button>
        </div>
      </form>
    </div>
  );
}

function Sidebar(props) {
  return (
    <aside>
      <div className="sidebar">
        <h1>The X-Effect</h1>
        <CreateCard {...props} />
        <EditCard {...props} />
      </div>
    </aside>
  );
}

export default Sidebar;
