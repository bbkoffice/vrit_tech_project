import { useField } from "formik";

import { SelectInputInterface } from "./interface.tsx";

function MySelectInput({ label, ...props }: SelectInputInterface) {
  let [field, meta, helpers] = useField(props);
  let isError = meta.touched && meta.error;

  return (
    <div className={"input_container"}>
      <label className={"input_label"}>
        {label}
        {props?.isRequired && <span>*</span>}
      </label>
      <select
        onChange={async (e) => {
          await helpers?.setValue(e?.target?.value);
        }}
        className={`px-2 border outline-none min-h-[35px] rounded-md focus:border-[#2680EB] text-[16px] `}
        name={props?.name}
        {...props}
      >
        {props?.options?.map((e, key) => {
          return (
            <option key={key} value={e?.value}>
              {e?.label}
            </option>
          );
        })}
      </select>
      <span className={"input_textError"}>{isError && meta?.error}</span>
    </div>
  );
}

export default MySelectInput;
