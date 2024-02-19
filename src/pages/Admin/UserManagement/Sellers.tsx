/* eslint-disable @typescript-eslint/no-explicit-any */
import Spinners from "../../../components/Common/Spinners";
import TableCommon from "../../../components/Common/TableCommon";
import CommonUserTableData from "../../../components/Dashboard/CommonUserTableData";
import { useGetAllSellersQuery } from "../../../redux/features/superAdmin/userManagement.api";

const Sellers = () => {
  const { data: sellers, isLoading } = useGetAllSellersQuery(undefined);

  if (isLoading) {
    return <Spinners />;
  }
  const TABLE_HEAD = ["Picture", "Name", "Brunch", "Status", "Delete", "Edit"];
  return (
    <TableCommon TABLE_HEAD={TABLE_HEAD}>
      {sellers?.data?.map((data: any, index: number) => {
        const isLast = index === sellers?.data?.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <CommonUserTableData key={index} data={data} classes={classes} />
        );
      })}
    </TableCommon>
  );
};

export default Sellers;
