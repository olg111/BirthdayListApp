import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import DataWrapper from './components/data-wrapper/data-wrapper';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataWrapper 
      component={App}
    />
);

