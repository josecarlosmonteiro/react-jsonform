import React, { useContext } from 'react';
import { FormContext } from '.';
import ErrorMessage from './EngineElements/ErrorMessage';
import SoloLine from './EngineElements/SoloLine';
import { EngineFormComponent } from './EngineInterfaces';

export default function Engine(props: EngineFormComponent) {
  const { id, title, type } = props;
  const { formErrors } = useContext(FormContext);

  const elementsMap: Record<string, JSX.Element> = {
    "text": <SoloLine {...props} />,
    "number": <SoloLine {...props} />
  }

  return (
    <div style={{ marginTop: 16 }}>
      <label style={{ marginRight: 12 }} htmlFor={id}>{title}:</label>
      {elementsMap[type]}

      <br />
      {formErrors[id] && <ErrorMessage message={formErrors[id]} />}
    </div>
  )
}