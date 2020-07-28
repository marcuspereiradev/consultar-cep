import React from 'react';

import Home from './pages/Home';
import Header from './components/Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;
