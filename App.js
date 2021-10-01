import React from 'react';

import Routes from './src/routes';
import Redux from './src/redux';

const App = () => {
  return (
    <Redux>
      <Routes />
    </Redux>
  );
};

export default App;
