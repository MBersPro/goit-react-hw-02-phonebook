import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((item) => (
        <li key={item.id}>
          {item.name}: {item.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
