import { CreateFormComponent, ReviewFormComponent } from "../components";
import { CreateFormInterface, FormFieldTypeEnum } from "../interfaces";

import { useMemo, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

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
              fields?.map((e, key) => {
                return (
                  <div
                    className={
                      "bg-gray-50 p-2 rounded-md cursor-pointer flex items-center justify-between"
                    }
                    key={key}
                  >
                    <div className={"flex flex-col text-[12px]"}>
                      <span>Label: {e?.label}</span>
                      <span>Type: {e?.type?.toUpperCase()}</span>
                      <span>Required: {e?.isRequired ? "Yes" : "No"}</span>
                    </div>
                    <MdDeleteOutline onClick={() => onDeleteHandler(key)} />
                  </div>
                );
              })
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
