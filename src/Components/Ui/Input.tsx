import { ChangeEvent, FC } from "react";

interface InputFieldProps {
  type: string;  // For now, you can specify 'string' for 'type', but you can also restrict it to 'text' | 'textarea' | 'password', etc.
  placeholder: string;
  altimeValue?: string;
  valueUpdate?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;  // Handles both input and textarea
}
const InputField: FC<InputFieldProps> = ({ type, placeholder, altimeValue, valueUpdate }) => {


  return (
    <div className={type === "textarea"? "mt-3":""}>
      <label className="font-medium" htmlFor={placeholder}>
        {placeholder}
      </label>
      {type === "textarea" ? (
        <textarea
        value={altimeValue}
        onChange={valueUpdate}
          required
          id={placeholder}
          className="w-full  min-h-[200px] focus:outline-none border border-gray-600 py-2 pl-2 rounded-lg text-lg font-medium"
        />
      ) : (
        <input
          required
          value={altimeValue}
          onChange={valueUpdate}
          id={placeholder}
          className="w-full focus:outline-none border border-gray-600 py-2 pl-2 rounded-lg text-lg font-medium"
          type={type}
        />
      )}
    </div>
  );
};

export default InputField;
