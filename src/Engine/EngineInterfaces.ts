export interface EngineFormComponent {
  id: string,
  type: string,
  title?: string,
  placeholder?: string,
  validations?: Record<any, string | boolean>
}

export interface JsonFormSectionProps {
  id: string,
  title?: string,
  children: EngineFormComponent[],
}

export interface JsonFormProps {
  formId: string,
  form_version: string,
  formSections: JsonFormSectionProps[],
}