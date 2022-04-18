import React from 'react';
import Engine from './Engine';
import { EngineFormComponent, JsonFormSectionProps } from './EngineInterfaces';

export default function FormSection({ id, title, children }: JsonFormSectionProps) {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <div style={{ margin: "8px 0px 0px 22px" }}>
        {
          children.length > 0 &&
          children.map((child: EngineFormComponent) => <Engine key={child.id} {...child} />)
        }
      </div>
    </div>
  )
}