import { FieldValues, UseFormRegister } from "react-hook-form";
import { TFilterValue } from "../../data/filterPriceValues";

type TSelectsProps = {
  priceValues: TFilterValue[];
  register: UseFormRegister<FieldValues>;
  label: string;
};

const Selects = ({ priceValues, register, label }: TSelectsProps) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <select
        className="py-2.5 rounded-md border border-blue-gray-400"
        {...register("price")}
      >
        {priceValues.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Selects;
