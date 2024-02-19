export type TSelectOption = {
  value: string;
  label: string;
};

export const gender = ["male", "female", "other"];
export const seelsHistory = [
  {
    value: 1,
    label: "Daily",
  },
  {
    value: 7,
    label: "Weekly",
  },
  {
    value: 30,
    label: "Monthly",
  },
  {
    value: 365,
    label: "Yearly",
  },
];

export const genderOptions = gender.map((item) => ({
  value: item,
  label: item,
}));

export const seelsHistoryOptions = seelsHistory.map((item) => ({
  value: item.value,
  label: item.label,
}));
