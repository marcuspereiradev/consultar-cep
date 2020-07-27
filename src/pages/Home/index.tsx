import React, { useCallback, useState, FormEvent } from 'react';
import Api from '../../services/api';

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
  const [cepAddress, setCepAddress] = useState<InfoAddress>({} as InfoAddress);
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
    <>
      <form onSubmit={handleSearchAddress}>
        <input type="text" value={cep} onChange={e => setCep(e.target.value)} />
        <button type="submit">Buscar cep</button>
      </form>
      {error && <p>{error}</p>}

      <ul>
        <li>{cepAddress.bairro}</li>
      </ul>
    </>
  );
};

export default Home;
