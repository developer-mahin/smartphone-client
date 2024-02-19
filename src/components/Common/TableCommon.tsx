import { CardBody, Typography } from "@material-tailwind/react";
import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { ExtendedJwtPayload } from "../../types/global";
import { jwtDecode } from "jwt-decode";

type TTableCommonProps = {
  children: ReactNode;
  TABLE_HEAD: string[];
};

const TableCommon = ({ children, TABLE_HEAD }: TTableCommonProps) => {
  const { token } = useAppSelector((state) => state.user);

  let decoded: ExtendedJwtPayload | undefined;
  if (token) {
    decoded = jwtDecode(token);
  }

  return (
    <CardBody placeholder={""} className="overflow-scroll px-0">
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD?.map((head) => {
              if (
                (head === "Edit" || head === "Create Variant") &&
                decoded?.role === "seller"
              ) {
                return null;
              } else if (
                head === "Sell Product" &&
                decoded?.role === "manager"
              ) {
                return null;
              }
              return (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    placeholder={""}
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </CardBody>
  );
};

export default TableCommon;
