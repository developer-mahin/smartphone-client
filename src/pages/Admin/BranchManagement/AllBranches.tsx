/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import Spinners from "../../../components/Common/Spinners";
import TableCommon from "../../../components/Common/TableCommon";
import { useGetAllBranchesQuery } from "../../../redux/features/superAdmin/branchManagement.api";
import TableText from "../../Dashboard/Seller/TableText";
import { PencilIcon } from "@heroicons/react/24/outline";

const AllBranches = () => {
  const {
    data: branches,
    isLoading,
  } = useGetAllBranchesQuery(undefined);

  if (isLoading) {
    return <Spinners />;
  }

  const TABLE_HEAD = ["Name", "Location", "Delete", "Edit"];

  return (
    <TableCommon TABLE_HEAD={TABLE_HEAD}>
      {branches?.data?.length > 0 &&
        branches?.data?.map((item: any, index: number) => {
          const isLast = index === branches?.data?.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={index}>
              <td className={classes}>
                <TableText>{item.branchName}</TableText>
              </td>
              <td className={classes}>
                <TableText>{item.branchLocation}</TableText>
              </td>
              <td className={classes}>
                <Button className="bg-red-500" placeholder={""} size="sm">
                  Delete
                </Button>
              </td>
              <td className={classes}>
                <Tooltip content="Edit User">
                  <IconButton placeholder={""} variant="text">
                    <PencilIcon className="size-6" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          );
        })}
    </TableCommon>
  );
};

export default AllBranches;
