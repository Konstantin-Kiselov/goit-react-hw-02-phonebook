import { Component } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'max' },
      { id: 2, name: 'tax' },
    ],
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState(prevState => {
      return { contacts: contacts.push(prevState) };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
