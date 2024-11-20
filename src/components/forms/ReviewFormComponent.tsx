import { CreateFormInterface, FormFieldTypeEnum } from "../../interfaces";
import {
  MyFileUploadInput,
  MyRadioInput,
  MySelectInput,
  MyTextInput,
  MyCheckInput,
  MyButton,
} from "../myInputs";
import { Form, Formik } from "formik";
import { useMemo } from "react";

interface propsInterface {
  inputFields: CreateFormInterface[];
}

function ReviewFormComponent({ inputFields }: propsInterface) {
  const getInputItems = (payload: CreateFormInterface) => {
    switch (payload.type) {
      case FormFieldTypeEnum.TEXT:
        return (
          <MyTextInput
            isRequired={payload?.isRequired}
            label={payload?.label}
            name={payload?.name}
            placeholder={payload?.placeholder}
          />
        );
      case FormFieldTypeEnum.CHECKBOX:
        return (
          <MyCheckInput
            label={payload?.label}
            name={payload?.name}
            placeholder={payload?.placeholder}
          />
        );
      case FormFieldTypeEnum.FILE:
        return (
          <MyFileUploadInput label={payload?.label} name={payload?.name} />
        );
      case FormFieldTypeEnum.SELECT:
        return (
          <MySelectInput
            label={payload?.label}
            name={payload?.name}
            isRequired={payload?.isRequired}
            options={payload?.options}
            placeholder={payload?.placeholder}
          />
        );
      case FormFieldTypeEnum.RADIO:
        return (
          <MyRadioInput
            label={payload?.label}
            name={payload?.name}
            isRequired={payload?.isRequired}
            options={payload?.options}
          />
        );
      default:
        return <span>Invalid input</span>;
    }
  };

  const initialValue = useMemo(() => {
    let values = {};
    inputFields?.forEach((e) => {
      if (e?.name) {
        values[e.name] = "";
      }
    });
    return values;
  }, [inputFields]);
  return (
    <Formik
      enableReinitialize
      initialValues={initialValue}
      onSubmit={(values) => {
        alert(`${Object.keys(values).map((e) => {
          return `${e}: ${values?.[e]}\n`;
        })}
       `);
      }}
    >
      <Form className={"flex flex-col gap-5"}>
        <b>Your Form</b>
        <div className={"flex flex-col gap-2 "}>
          {inputFields?.map((e, key) => {
            return <div key={key}>{getInputItems(e)}</div>;
          })}
        </div>
        <div className={"flex justify-between"}>
          <div></div>
          <div>
            <MyButton style={"text-white bg-green-500"} name={"Preview JSON"} />
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default ReviewFormComponent;
