import React from 'react';

import { Container, Card, CardTop, CardCotent } from './styles';

export default function Branch() {
  return (
    <Container>
        <Card>
          <CardTop>
            <h1>Flavio Tavares</h1>
          </CardTop>
          <CardCotent>
            <h3>Ramal: </h3> <p>2546</p> <br />
            <h3>Setor: </h3> <p>Projetos</p><br />
            <h3>Andar: </h3> <p>10</p><br />
            <h3>Função: </h3> <p>Desenvolvedor</p>
          </CardCotent>
        </Card>
    </Container>
  );
}
