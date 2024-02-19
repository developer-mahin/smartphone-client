import { Input } from "@material-tailwind/react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  required: boolean;
  placeholder?: string;
  label: string;
};

const Inputs = ({ type, name, placeholder, required, label }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required,
      }}
      render={({ field: { value, ...field } }) => (
        <>
          <Input
            label={label}
            crossOrigin={""}
            {...field}
            value={value}
            type={type}
            placeholder={placeholder}
            required={required}
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
          />
        </>
      )}
    />
  );
};

export default Inputs;
