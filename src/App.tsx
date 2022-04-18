import React from 'react';
import FormRender from './Engine';
import jsonForm from './jsonform.json';

export default function App() {
  return (
    <div className="App">
      <h1>Formulário via JSON</h1>
      <h3>Validação usando Custom Hook</h3>
      <hr />
      <FormRender {...jsonForm} />
    </div>
  );
}