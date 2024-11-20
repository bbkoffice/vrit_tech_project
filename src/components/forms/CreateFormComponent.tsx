import { FieldArray, Form, Formik } from "formik";
import * as yup from "yup";
import { CreateFormInterface, FormFieldTypeEnum } from "../../interfaces";
import {
  MyButton,
  MyCheckInput,
  MySelectInput,
  MyTextInput,
} from "../myInputs";
import { getFormInputOptions } from "../../utils.tsx";
import { AiFillDelete } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";

interface propsInterface {
  onSubmitCallbackHandler(payload: CreateFormInterface);
}
function CreateFormComponent({ onSubmitCallbackHandler }: propsInterface) {
  const onSubmitHandler = (values: any) => {
    onSubmitCallbackHandler(values);
  };

  return (
    <Formik
      initialValues={FormikValues.initialValues({})}
      onSubmit={onSubmitHandler}
      validationSchema={FormikValues.validationSchema}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form className={"flex flex-col gap-2 p-4 border rounded-md"}>
            <div className={"font-medium"}>Add new field in input</div>
            <MyTextInput
              label={"Label"}
              name={"label"}
              isRequired
              placeholder={"Enter input label"}
            />
            <MyTextInput
              label={"Name"}
              isRequired
              name={"name"}
              placeholder={"Enter input name"}
            />{" "}
            <MyTextInput
              label={"Placeholder"}
              name={"placeholder"}
              placeholder={"Enter input placeholder"}
            />
            <MySelectInput
              label={"Input Type"}
              name={"type"}
              isRequired
              placeholder={"Enter input type"}
              options={getFormInputOptions}
            />
            {(values?.type == FormFieldTypeEnum.SELECT ||
              values?.type == FormFieldTypeEnum.RADIO) && (
              <div>
                <FieldArray
                  name={"options"}
                  render={({ push, remove }) => {
                    return (
                      <div className={""}>
                        <span>Options</span>
                        <div className={"flex flex-col gap p-2"}>
                          {values?.options?.map((e, key) => {
                            return (
                              <div className={"grid grid-cols-2 gap-2"}>
                                <MyTextInput
                                  label={"Label"}
                                  placeholder={"Enter label"}
                                  name={`options.${key}.label`}
                                />
                                <div className={"flex items-center gap-2"}>
                                  <MyTextInput
                                    label={"Value"}
                                    placeholder={"Enter value"}
                                    name={`options.${key}.value`}
                                  />
                                  <div className={"flex flex-1"}>
                                    <AiFillDelete
                                      className={
                                        "text-[16px] text-red-500 cursor-pointer"
                                      }
                                      onClick={() => remove(key)}
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div
                          className={"flex items-center gap-2 cursor-pointer"}
                          onClick={() => push({ label: "", value: "" })}
                        >
                          <IoIosAdd />
                          <span>Add Options</span>
                        </div>
                        {/*<MyButton*/}
                        {/*  type={"button"}*/}
                        {/*  onClick={() => {*/}
                        {/*    push({ label: "", value: "" });*/}
                        {/*  }}*/}
                        {/*  name={"Add Options"}*/}
                        {/*  style={"text-left text-[14px] p-1 text-green-500"}*/}
                        {/*/>*/}
                      </div>
                    );
                  }}
                />
              </div>
            )}
            <MyCheckInput label={"is required?"} name={"isRequired"} />
            {values?.isRequired && (
              <MyTextInput
                label={"Validation message"}
                name={"validationMessage"}
                placeholder={"Enter validation message"}
              />
            )}
            <MyButton name={"Submit"} />
          </Form>
        );
      }}
    </Formik>
  );
}

const FormikValues = {
  initialValues: (values: Partial<CreateFormInterface>) => ({
    label: values?.label || "",
    name: values?.name || "",
    type: FormFieldTypeEnum,
    options: values?.options || [],
    isRequired: values?.isRequired || false,
    validationMessage: values?.validationMessage || false,
  }),
  validationSchema: yup.object().shape({
    label: yup.string().required("Label is required"),
    name: yup.string().required("Name is required"),
    type: yup.string().required("Type is required"),
    isRequired: yup.boolean(),
    validationMessage: yup.string(),
  }),
};

export default CreateFormComponent;
