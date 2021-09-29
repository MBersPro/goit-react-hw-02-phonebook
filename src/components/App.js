import React, { Component } from "react";
import Section from "./section/Section";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

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

  addContact = (contact) => {
    const id = uuidv4();
    if (
      this.state.contacts.map((item) =>
        item.name.toLowerCase()) === contact.name.toLowerCase()
      
    ) {
      return alert(`${contact.name} is already in contacts.`);
    } else {
      this.setState((prev) => ({
        contacts: [...prev.contacts, { ...contact, id }],
      }));
    }
  };

  getFilteredContacts = () =>
    this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  setFilter = (e) =>
    this.setState({
      filter: e.target.value,
    });

  render() {
    return (
      <>
        <Section title={"Phonebook"}>
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title={"Contacts"}>
          <Filter setFilter={this.setFilter} filter={this.state.filter} />
          <ContactList contacts={this.getFilteredContacts()} />
        </Section>
      </>
    );
  }
}

export default App;