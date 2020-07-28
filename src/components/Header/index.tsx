import React from 'react';

import { FiMapPin } from 'react-icons/fi';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <header>
          <FiMapPin size={30} />
          <h1>Consultar cep</h1>
        </header>
      </Container>
    </>
  );
};

export default Header;
