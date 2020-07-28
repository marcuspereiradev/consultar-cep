import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Form = styled.form`
  display: flex;
  height: 60px;

  input {
    border: none;
    box-shadow: 2px 2px 2px #ddd;
    border-radius: 5px 0 0 5px;
    flex: 1;
    padding: 0 20px;
  }

  button {
    background: #ffd400;
    border: none;
    box-shadow: 2px 2px 2px #ddd;
    border-radius: 0 5px 5px 0;
    width: 120px;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #ffbb00;
    }
  }
`;

export const Table = styled.table`
  margin: 0 auto;
  margin-top: 60px;

  th {
    background: #ddd;
    border: 1px solid #ddd;
    padding: 10px;
  }

  td {
    border: 1px solid #ddd;
    padding: 10px;
  }
`;

export const Error = styled.p`
  color: #d30000;
  padding: 20px 0;
`;
