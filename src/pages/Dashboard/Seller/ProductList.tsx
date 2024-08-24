/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@material-tailwind/react";
import Spinners from "../../../components/Common/Spinners";
import TableCommon from "../../../components/Common/TableCommon";
import ProductListTableHeader from "../../../components/Dashboard/ProductListTableHeader";
import { useGetAllProductsQuery } from "../../../redux/features/products/productApi";
import { useAppSelector } from "../../../redux/hooks";
import ProductListCard from "./ProductListCart";

const TABLE_HEAD = [
  "Product Details",
  "More Information",
  "Sell Product",
  "Create Variant",
  "Edit",
];

const ProductsList = () => {
  const {
    price,
    release_date,
    brand,
    camera_quality,
    model,
    operating_system,
    screen_size,
    storage_capacity,
    search,
  } = useAppSelector((state) => state.product);

  const query = {
    price,
    release_date,
    brand,
    camera_quality,
    model,
    operating_system,
    screen_size,
    storage_capacity,
    search,
  };

  const { data: getAllProducts, isLoading } = useGetAllProductsQuery(query);

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <>
      <Card placeholder={""} className="h-full w-full">
        <ProductListTableHeader />

        <TableCommon TABLE_HEAD={TABLE_HEAD}>
          {getAllProducts?.data?.map((product: any, index: number) => {
            const isLast = index === getAllProducts?.data?.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <ProductListCard
                key={index}
                product={product}
                classes={classes}
              />
            );
          })}
        </TableCommon>
      </Card>
    </>
  );
};

export default ProductsList;
