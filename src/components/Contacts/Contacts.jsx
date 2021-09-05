import React from 'react';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default Contacts;
