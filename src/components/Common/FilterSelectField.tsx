import { TFilterValue } from "../../data/filterPriceValues";

type TFilterSelectFieldProps = {
  label: string;
  handleValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  mappedValue: TFilterValue[];
};

const FilterSelectField = ({
  label,
  handleValue,
  mappedValue,
}: TFilterSelectFieldProps) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-blue-gray-400">{label}</label>
      <select
        onChange={handleValue}
        className="py-2.5 rounded-md border border-blue-gray-400"
      >
        <option value="">Select...</option>
        {mappedValue.map((option, index) => {
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

export default FilterSelectField;
