import {
  CreateFormComponent,
  FormValueListComponent,
  ReviewFormComponent,
} from "../components";
import { CreateFormInterface, FormFieldTypeEnum } from "../interfaces";

import { useMemo, useState } from "react";

function FormBuilderPage() {
  const [fields, setFields] = useState<CreateFormInterface[]>([]);

  const onCreateNewForm = (payload: CreateFormInterface) => {
    setFields((e) => {
      return [...e, payload];
    });
  };
  const onDeleteHandler = (index: number) => {
    setFields((e) => {
      e.splice(index, 1);
      return [...e];
    });
  };

  const inputFields = useMemo(() => {
    return fields;
  }, [fields]);
  return (
    <div className={"grid grid-cols-3 gap-5 p-2"}>
      <div className={"flex flex-col gap-5"}>
        <CreateFormComponent onSubmitCallbackHandler={onCreateNewForm} />
        <div className={"flex flex-col gap-2"}>
          <span className={"font-bold"}>Input Fields</span>
          <div className={"flex flex-col gap-1"}>
            {inputFields?.length > 0 ? (
              <FormValueListComponent
                forms={inputFields}
                onDeleteHandler={onDeleteHandler}
              />
            ) : (
              <span>No fields created</span>
            )}
          </div>
        </div>
      </div>
      <div className={"col-span-2 px-5 mt-5"}>
        {fields?.length > 0 && (
          <ReviewFormComponent inputFields={inputFields} />
        )}
      </div>
    </div>
  );
}

export default FormBuilderPage;
