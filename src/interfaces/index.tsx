export enum FormFieldTypeEnum {
  TEXT = "text",
  SELECT = "select",
  RADIO = "radio",
  FILE = "file",
  CHECKBOX = "checkbox",
}
export interface CreateFormInterface {
  label: string;
  name: string;
  placeholder: string;
  type: FormFieldTypeEnum;
  isRequired: boolean;
  validationMessage: string;
  options: { label: string; value: string | number }[];
}
