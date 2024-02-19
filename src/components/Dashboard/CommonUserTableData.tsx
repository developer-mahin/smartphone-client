import { PencilIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { useState } from "react";
import TableText from "../../pages/Dashboard/Seller/TableText";
import { setProduct } from "../../redux/features/products/productSlice";
import { useAppDispatch } from "../../redux/hooks";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TProductListProps = {
  data: any;
  classes: any;
};

const CommonUserTableData = ({ classes, data }: TProductListProps) => {
  // const [buttonText, setButtonText] = useState("");

  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // const modalTitle =
  //   buttonText === "Edit"
  //     ? "Edit User"
  //     : buttonText === "Status"
  //     ? "Block User Status"
  //     : "Delete User";

  return (
    <>
      <tr>
        <td className={classes}>
          <img
            src={data.profileImage}
            alt=""
            className="size-16 rounded-full object-cover"
          />
        </td>
        <td className={classes}>
          <TableText>{data.fullName}</TableText>
        </td>
        <td className={classes}>
          <TableText>{data?.managerOfBranch?.branchName}</TableText>
        </td>
        <td className={classes}>
          <Button
            onClick={() => {
              // setButtonText("Status");
              handleOpen();
            }}
            placeholder={""}
            size="sm"
          >
            {data?.user?.status}
          </Button>
        </td>
        <td className={classes}>
          <Button
            onClick={() => {
              // setButtonText("Delete");
              dispatch(setProduct(data));
              handleOpen();
            }}
            className="bg-red-500"
            placeholder={""}
            size="sm"
          >
            Delete
          </Button>
        </td>
        <td className={classes}>
          <Tooltip content="Edit User">
            <IconButton
              onClick={() => {
                // setButtonText("Edit");
                handleOpen();
              }}
              placeholder={""}
              variant="text"
            >
              <PencilIcon className="size-6" />
            </IconButton>
          </Tooltip>
        </td>
      </tr>
      {/* <MModal modalTitle={modalTitle} open={open} handleOpen={handleOpen}>
        {buttonText === "Delete" ? (
          <DeleteUserModalContent handleOpen={handleOpen} />
        ) : buttonText === "Status" ? (
          <BlockStatusUserModelContent />
        ) : (
          <EditUserModalContent />
        )}
      </MModal> */}
    </>
  );
};

export default CommonUserTableData;
