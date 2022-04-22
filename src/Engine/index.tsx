import React, { BaseSyntheticEvent, createContext, useEffect, useState } from 'react';
import { JsonFormProps, JsonFormSectionProps } from './EngineInterfaces';
import FormSection from './FormSection';
import useValidateForm from './useValidateForm';

export const FormContext = createContext<Record<any, any>>({});

export default function FormRender(props: JsonFormProps) {
  const { formId, formSections: sections } = props;
  const [formValues, setFormValues] = useState<any>({});

  const { validate, formErrors } = useValidateForm();

  const handleFormValues = (event: BaseSyntheticEvent, validations: any) => {
    event.persist();

    const { target: { name, value } } = event;
    const myState = { ...formValues, [name]: { value, validations } };

    setFormValues(myState);
    validate(myState);
  }

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    console.log('values:', formValues);
    console.log('errors:', formErrors);
  }

  const handleInvalidSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const { target: { name, value } } = event;
    console.log(name, value)

    validate({ [name]: value });
  }

  return (
    <div>
      <form id={formId} onSubmit={handleSubmit} onInvalid={handleInvalidSubmit} >
        <FormContext.Provider value={{ handleFormValues, formErrors }}>
          {
            sections.length > 0 &&
            sections.map((section: JsonFormSectionProps) => <FormSection key={section.id} {...section} />)
          }
        </FormContext.Provider>

        <br /><br />

        <button
          type='submit'
          style={{ padding: 8, cursor: 'pointer' }}>Enviar formulário</button>
      </form>
    </div>
  )
}