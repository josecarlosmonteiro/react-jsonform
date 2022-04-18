import React, { BaseSyntheticEvent, createContext, useEffect, useState } from 'react';
import { JsonFormProps, JsonFormSectionProps } from './EngineInterfaces';
import FormSection from './FormSection';

export const FormContext = createContext<Record<any, any>>({});

export default function FormRender(props: JsonFormProps) {
  const { formId, formSections: sections } = props;
  const [formValues, setFormValues] = useState<any>({});
  const [formErrors, setFormErrors] = useState<any>({});


  const handleFormValues = (event: BaseSyntheticEvent) => {
    event.persist();
    const { target: { name, value } } = event;
    setFormValues({ ...formValues, [name]: value });
    console.info(formValues);

    delete formErrors[name];
  }

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (Object.keys(formErrors).length <= 0) {
      console.log("Formulário enviado!", formValues);
    } else {
      console.error("Envio não permitido! Conserte todos os campos preenchidos incorretamente.");
    }
  }

  const handleInvalidForm = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const { target: { name } } = event;

    setFormErrors({ ...formErrors, [name]: true });
  }

  return (
    <div>
      <form id={formId} onSubmit={handleSubmit} onInvalid={handleInvalidForm} >
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