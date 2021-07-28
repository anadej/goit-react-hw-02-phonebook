import React, { Component } from "react";
import Filter from "./admin/Filter";
import PhonebookForm from "./admin/PhonebookForm";
import Contacts from "./contacts/Contacts";
import Section from "./Section";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (contact) => {
    if (
      this.state.contacts.some(
        (stateItem) =>
          stateItem.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(contact.name + " is already in contact list");
      return;
    }

    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  removeContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterContacts = (inputFilter) => {
    this.setState({ filter: inputFilter });
  };

  render() {
    return (
      <>
        <Section title={"Phonebook"}>
          <PhonebookForm addNewContact={this.addNewContact} />
        </Section>
        <Section title={"Contacts"}>
          <Filter filterContacts={this.filterContacts} />
          <Contacts
            contacts={this.state.contacts}
            filter={this.state.filter}
            removeContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
