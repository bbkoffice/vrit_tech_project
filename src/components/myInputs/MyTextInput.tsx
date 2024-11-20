import { useField } from "formik";

import { InputInterface } from "./interface.tsx";
import "./style.css";
function MyTextInput({ label, ...props }: InputInterface) {
  let [field, meta, helpers] = useField(props);
  let isError = meta.touched && meta.error;
  return (
    <div className={"input_container"}>
      <label className={"input_label"}>
        {label} {props?.isRequired && "*"}
      </label>
      <input
        className={`px-2 border outline-none min-h-[35px] rounded-md focus:border-[#2680EB] text-[16px] `}
        {...field}
        {...props}
      />
      <span className={"input_textError"}>{isError && meta?.error}</span>
    </div>
  );
}

export default MyTextInput;
