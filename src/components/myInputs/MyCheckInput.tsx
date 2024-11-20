import { useField } from "formik";
import { IoMdCheckbox } from "react-icons/io";
import { FaRegSquare } from "react-icons/fa";

import { InputInterface } from "./interface.tsx";

function MyCheckInput({ label, ...props }: InputInterface) {
  let [field, meta, helpers] = useField(props);
  const CheckIcon = IoMdCheckbox;
  const UnCheckIcon = FaRegSquare;

  return (
    <div
      className={"flex items-center gap-2 cursor-pointer"}
      onClick={async () => {
        await helpers.setValue(!field?.value);
      }}
    >
      {field?.value ? (
        <CheckIcon className={"text-gray-500"} />
      ) : (
        <UnCheckIcon className={"text-gray-500"} />
      )}
      <label>{label}</label>
    </div>
  );
}

export default MyCheckInput;
