import React, { BaseSyntheticEvent, useContext } from 'react';
import { FormContext } from '..';
import { EngineFormComponent } from '../EngineInterfaces';

export default function SoloLine(props: EngineFormComponent) {
  const { id, validations, placeholder, type } = props;
  const { handleFormValues } = useContext(FormContext);

  return (
    <>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoFocus
        onChange={(event: BaseSyntheticEvent) => handleFormValues(event, validations)}
        {...validations} />
    </>
  )
}