import { FormFieldTypeEnum } from "./interfaces";

export const getFormInputOptions = [
  {
    label: "Select",
    value: FormFieldTypeEnum.SELECT,
  },
  {
    label: "Text",
    value: FormFieldTypeEnum.TEXT,
  },
  {
    label: "Radio",
    value: FormFieldTypeEnum.RADIO,
  },
  {
    label: "File",
    value: FormFieldTypeEnum.FILE,
  },
  {
    label: "Checkbox",
    value: FormFieldTypeEnum.CHECKBOX,
  },
];
