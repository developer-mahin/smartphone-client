import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { ReactNode } from "react";

interface MModalProps {
  handleOpen: () => void;
  open: boolean;
  children: ReactNode;
  modalTitle?: string;
}

export function MModal({
  handleOpen,
  open,
  modalTitle,
  children,
}: MModalProps) {
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogHeader
          className="flex items-center justify-between"
          placeholder={""}
        >
          <Typography
            className="lg:text-4xl text-2xlcd .. font-semibold text-gray-600"
            placeholder={""}
          >
            {modalTitle}
          </Typography>
          <IconButton
            placeholder={""}
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody placeholder={""}>{children}</DialogBody>
      </Dialog>
    </>
  );
}
