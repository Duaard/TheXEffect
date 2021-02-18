import React, { useEffect, useState } from 'react';
import './Sidebar.css';

function CreateCard(props) {
  const [defaultValues, setDefaultValues] = useState({
    title: '',
    whys: ['', '', ''],
  });

  function handleSubmit(title, whys) {
    props.handleSubmit({
      title,
      whys,
      grid: [...Array(49)],
    });
    setDefaultValues({ title: '', whys: ['', '', ''] });
  }

  const children = <button type="submit">Create Card</button>;

  return (
    <CardForm
      header="Add Card"
      initialValues={defaultValues}
      handleSubmit={handleSubmit}
    >
      {children}
    </CardForm>
  );
}

function EditCard(props) {
  const { selectedCard } = props;

  function handleDelete() {
    props.handleCardDelete();
  }

  function handleSubmit(title, whys) {
    props.handleCardUpdate({
      ...selectedCard,
      title,
      whys,
    });
  }

  if (selectedCard == null) {
    // There's no selected card
    return (
      <div className="card-edit-container">
        <h3>Click a card title to edit</h3>
      </div>
    );
  }

  const children = (
    <>
      <button type="button" onClick={handleDelete}>
        Delete Card
      </button>
      <button type="submit">Save Card</button>
    </>
  );

  return (
    <>
      <CardForm
        header="Edit Card"
        initialValues={selectedCard}
        handleSubmit={handleSubmit}
      >
        {children}
      </CardForm>
    </>
  );
}

function CardForm(props) {
  const { header, initialValues, children } = props;
  const [title, setTitle] = useState('');
  const whys = useDynamicInput(initialValues.whys);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues]);

  function handleOnTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(title, whys.inputs);
  }

  return (
    <div className="card-creation-container">
      <h3>{header}</h3>
      <form className="card-creation" onSubmit={handleSubmit}>
        <div className="sidebar-row">
          <LabeledInput
            name="title"
            label="Title:"
            value={title}
            handleInputChange={handleOnTitleChange}
          />
        </div>
        <div className="sidebar-row">
          <button type="button" onClick={whys.addInput}>
            Add Reason
          </button>
        </div>
        {whys.inputs.map((why, idx) => {
          return (
            <div key={idx} className="sidebar-row">
              <LabeledInput
                name={idx}
                label={`${idx + 1}:`}
                value={why}
                handleInputChange={(e) => whys.handleInputChange(e, idx)}
              />
              <button type="button" onClick={() => whys.removeInput(idx)}>
                -
              </button>
            </div>
          );
        })}

        <div className="sidebar-row">{children}</div>
      </form>
    </div>
  );
}

function LabeledInput(props) {
  const { name, label, value } = props;
  function handleInputChange(e) {
    props.handleInputChange(e);
  }
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        autoComplete="off"
        onChange={handleInputChange}
      />
    </>
  );
}

function Sidebar(props) {
  return (
    <div className="sidebar">
      <h1>The X-Effect</h1>
      <CreateCard handleSubmit={props.handleSubmit} />
      <EditCard {...props} />
    </div>
  );
}

function useDynamicInput(initialValue) {
  const [inputs, setInputs] = useState(initialValue);

  useEffect(() => {
    setInputs(initialValue);
  }, [initialValue]);

  function addInput() {
    if (inputs.length < 5) {
      const nInputs = [...inputs];
      nInputs.push('');
      setInputs(nInputs);
    }
  }

  function removeInput(idx) {
    if (inputs.length !== 0) {
      const nInputs = [...inputs];
      nInputs.splice(idx, 1);
      setInputs(nInputs);
    }
  }

  function handleInputChange(e, idx) {
    const nInputs = [...inputs];
    nInputs[idx] = e.target.value;
    setInputs(nInputs);
  }

  return { inputs, addInput, removeInput, handleInputChange };
}

export default Sidebar;
