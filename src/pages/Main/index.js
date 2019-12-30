import React from 'react';

import { FaPhone, FaSearch } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaPhone />
        Ramais
      </h1>

      <Form onSubmit={() => {}}>
        <input 
          type="text"
          placeholder="Encontrar Ramal"
        />

        <SubmitButton disabled>
          <FaSearch color="#FFF" size={14} />
        </SubmitButton>
      </Form>

    </Container>
  );
}
