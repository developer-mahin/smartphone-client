import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

const TableText = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      placeholder={""}
      variant="small"
      color="blue-gray"
      className="text-gray-900 font-medium"
    >
      {children}
    </Typography>
  );
};

export default TableText;
