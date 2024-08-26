/* eslint-disable @typescript-eslint/no-explicit-any */
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, Input, Typography } from "@material-tailwind/react";
import Spinners from "../../../components/Common/Spinners";
import TableCommon from "../../../components/Common/TableCommon";
import { useGetSelesProductQuery } from "../../../redux/features/selesManagement/selesApi";
import { sortByDuration } from "../../../redux/features/selesManagement/selesSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const TABLE_HEAD = ["Product", "More Information", "Buyer Name", "Seels Date"];

const SelesProduct = () => {
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector((state) => state.seles);
  const { data: getSelesProduct, isLoading } = useGetSelesProductQuery(sortBy);

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <Card placeholder={""} className="h-full w-full">
      <CardHeader
        placeholder={""}
        floated={false}
        shadow={false}
        className="rounded-none"
      >
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography placeholder={""} variant="h5" color="blue-gray">
              Seels product list
            </Typography>
            <Typography
              placeholder={""}
              color="gray"
              className="mt-1 font-normal"
            >
              See information about sells product
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <select
              onChange={(e) => dispatch(sortByDuration(e.target.value))}
              className="py-2.5 rounded-md border border-blue-gray-400 w-[120px]"
            >
              <option>Sort By...</option>

              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              crossOrigin={""}
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <TableCommon TABLE_HEAD={TABLE_HEAD}>
        {getSelesProduct?.data?.map((product: any, index: number) => {
          const { productId, nameOfBuyer, selsDate } = product;
          const isLast = index === getSelesProduct?.data?.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={product?._id}>
              <td className={classes}>
                <div className="flex items-center gap-3">
                  <img
                    className="size-20"
                    src={productId?.product_image}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <Typography
                      placeholder={""}
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Name : {productId?.product_name}
                    </Typography>
                    <Typography
                      placeholder={""}
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      Brand: {productId?.brand}
                    </Typography>
                    <Typography
                      placeholder={""}
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      Release Date: {productId?.release_date}
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={classes}>
                <div className="flex flex-col">
                  <Typography
                    placeholder={""}
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Model: {productId?.model}
                  </Typography>
                  <Typography
                    placeholder={""}
                    variant="small"
                    color="blue-gray"
                    className="font-normal opacity-70"
                  >
                    Operating System : {productId?.operating_system}
                  </Typography>
                  <Typography
                    placeholder={""}
                    variant="small"
                    color="blue-gray"
                    className="font-normal opacity-70"
                  >
                    Ram : {productId?.ram}
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <div className="w-max">
                  <Typography
                    placeholder={""}
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {nameOfBuyer}
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <Typography
                  placeholder={""}
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {selsDate}
                </Typography>
              </td>
            </tr>
          );
        })}
      </TableCommon>
    </Card>
  );
};

export default SelesProduct;