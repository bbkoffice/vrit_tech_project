import { MyButtonInterface } from "./interface.tsx";

function MyButton({ name, onClick, style, type }: MyButtonInterface) {
  return (
    <button
      type={type || "submit"}
      className={`w-full rounded-md py-2 px-2 ${style || "bg-blue-500 text-white"} `}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default MyButton;
