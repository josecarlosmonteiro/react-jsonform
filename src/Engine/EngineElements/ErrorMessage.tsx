import React from 'react';
import { ErrorMessageProps } from '../EngineInterfaces';

export default function ErrorMessage({ message }: ErrorMessageProps) {

  return (
    <div style={{ color: 'red' }}>
      {message}
    </div>
  )
}