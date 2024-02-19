import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

type TButtonsProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
};

const Buttons = ({ children, type }: TButtonsProps) => {
  return (
    <Button
      type={type}
      className="w-full px-4 py-3 bg-[#10B981] font-family-lato text-white font-semibold text-md capitalize"
      placeholder={""}
    >
      {children}
    </Button>
  );
};

export default Buttons;
