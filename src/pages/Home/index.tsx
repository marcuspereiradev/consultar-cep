import React, { useCallback, useState, FormEvent } from 'react';
import Api from '../../services/api';

import { Container, Form, Table, Error } from './styles';

interface InfoAddress {
  bairro: string;
  cidade: string;
  logradouro: string;
  estado_info: {
    area_km2: string;
    codigo_ibge: string;
    nome: string;
  };
  cep: string;
  cidade_info: {
    area_km2: string;
    codigo_ibge: string;
  };
  estado: string;
}

const Home: React.FC = () => {
  const [cep, setCep] = useState('');
  const [cepAddress, setCepAddress] = useState<InfoAddress | null>(null);
  const [error, setError] = useState('');

  const handleSearchAddress = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (!cep) return setError('O campo não pode ser vazio.');

      const validedCep = cep.match(/\d+/g)?.join('');

      if (validedCep?.length !== 8) return setError('CEP contém 8 digítos.');

      const address = await Api.get<InfoAddress>(`/${validedCep}`)
        .then(response => {
          setCepAddress(response.data);
          setError('');
        })
        .catch(err => setError('CEP não encontrado.'));

      return address;
    },
    [cep],
  );

  return (
    <Container>
      <Form onSubmit={handleSearchAddress}>
        <input type="text" value={cep} onChange={e => setCep(e.target.value)} />
        <button type="submit">Buscar cep</button>
      </Form>
      {error && <Error>{error}</Error>}

      {cepAddress && (
        <Table>
          <thead>
            <tr>
              <th>Cep</th>
              <th>Logradouro</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cepAddress.cep}</td>
              <td>{cepAddress.logradouro}</td>
              <td>{cepAddress.bairro}</td>
              <td>{cepAddress.cidade}</td>
              <td>{cepAddress.estado_info?.nome}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Home;
