import React from "react";
import ContactList from "./contactList/ContactList";

const Contacts = ({ contacts, filter, removeContact }) => {
  return (
    <>
      <ul>
        {contacts.map(
          (contact) =>
            contact.name.includes(filter) && (
              <ContactList
                {...contact}
                key={contact.id}
                removeContact={removeContact}
              />
            )
        )}
      </ul>
    </>
  );
};

export default Contacts;
