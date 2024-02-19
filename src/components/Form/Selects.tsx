import { Option, Select } from "@material-tailwind/react";
import { TSelectOption } from "../../constant/Global";
import { Controller } from "react-hook-form";

type TSelectsProps = {
  name: string;
  label: string;
  options: TSelectOption[];
  disabled?: boolean;
};

const Selects = ({ name, options, label, disabled }: TSelectsProps) => {
  return (
    <>
      {options && options?.length > 0 && (
        <Controller
          name={name}
          rules={{
            required: true,
          }}
          render={({ field: { value, ...field } }) => (
            <Select
              disabled={disabled}
              {...field}
              value={value}
              placeholder={""}
              label={label}
            >
              {options?.map((item) => (
                <Option
                  className="capitalize"
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </Option>
              ))}
            </Select>
          )}
        />
      )}
    </>
  );
};

export default Selects;
