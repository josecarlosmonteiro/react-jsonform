import React, { useContext } from 'react';
import { FormContext } from '..';
import { EngineFormComponent } from '../EngineInterfaces';

export default function SoloLine(props: EngineFormComponent) {
  const { id, validations, placeholder, type } = props;
  const { handleFormValues, formErrors } = useContext(FormContext);

  return (
    <>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={handleFormValues}
        {...validations} />
      {
        formErrors[id] && <p>Campo inválido!</p>
      }
    </>
  )
}