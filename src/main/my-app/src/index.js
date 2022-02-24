import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './reactComponents/Dashboard'


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Dashboard/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


