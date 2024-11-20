import { useField } from "formik";

import { InputInterface } from "./interface.tsx";

function MyFileUploadInput({ label, ...props }: InputInterface) {
  let [field, meta, helpers] = useField(props);
  let isError = meta.touched && meta.error;

  return (
    <div>
      <label>{label}</label>
      <div>
        <input type={"file"} {...props} />
      </div>
      <span>{isError && meta?.error}</span>
    </div>
  );
}

export default MyFileUploadInput;
