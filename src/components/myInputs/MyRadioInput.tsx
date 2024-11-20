import { useField } from "formik";

import { SelectInputInterface } from "./interface.tsx";

function MyRadioInput({ label, ...props }: SelectInputInterface) {
  let [field, meta, helpers] = useField(props);
  let isError = meta.touched && meta.error;

  return (
    <div>
      <label>{label}</label>
      <div>
        {props?.options?.map((e, key) => {
          return (
            <div className={"flex items-center gap-2"}>
              <input
                type={"radio"}
                onChange={(e) => {
                  helpers.setValue(e?.target?.value);
                }}
                {...props}
              />
              <label>{e?.label}</label>
            </div>
          );
        })}
      </div>
      <span>{isError && meta?.error}</span>
    </div>
  );
}

export default MyRadioInput;
