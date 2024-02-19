/* eslint-disable @typescript-eslint/no-explicit-any */
import { PencilIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Checkbox,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import CreateVariantContant from "../../../components/Dashboard/CreateVariantContant";
import { MModal } from "../../../components/Common/MModal";
import SellProductModalContent from "../../../components/Dashboard/SellProductModalContent";
import UpdateProductModalContent from "../../../components/Dashboard/UpdateProductModalContent";
import {
  setButtonText,
  setProduct,
  setProductId,
  setProductIdForBulkDelete,
} from "../../../redux/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { ExtendedJwtPayload } from "../../../types/global";
import TableText from "./TableText";

type TProductListProps = {
  product: any;
  classes: any;
};

const ProductListCard = ({ product, classes }: TProductListProps) => {
  const dispatch = useAppDispatch();
  const { buttonText } = useAppSelector((state) => state.product);
  const { token } = useAppSelector((state) => state.user);

  let decoded: ExtendedJwtPayload | undefined;
  if (token) {
    decoded = jwtDecode(token);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [check, setCheck] = useState(false);

  const modalTitle =
    buttonText === "Sell Product"
      ? "Sell Product"
      : buttonText === "Create Variant"
      ? "Create or Duplicate Product"
      : "Update Product";

  return (
    <>
      <tr key={product._id}>
        <td className={classes}>
          <div className="flex items-center">
            <div className="flex">
              {decoded?.role !== "seller" && (
                <Checkbox
                  onClick={() => {
                    setCheck(!check);
                    dispatch(setProductIdForBulkDelete(product._id));
                  }}
                  crossOrigin={""}
                  defaultChecked={false}
                />
              )}
              <img src={product.product_image} alt="" className="size-36" />
            </div>
            <div className="flex flex-col">
              <TableText> Name:{product.product_name}</TableText>
              <TableText>Model: {product.model}</TableText>
              <TableText>Brand: {product.brand}</TableText>
              <TableText>Price: {product.price}</TableText>
              <TableText>Material: {product.material}</TableText>
              <TableText>Screen Size: {product.screen_size}</TableText>
            </div>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <TableText>Available Quantity: {product.quantity}</TableText>
            <TableText>Operating System: {product.operating_system}</TableText>
            <TableText>Color: {product.colors}</TableText>
            <TableText>Ram: {product.ram}</TableText>
            <TableText>Camera Quality: {product.camera_quality}</TableText>
            <TableText>Battery: {product.battery_life}</TableText>
            <TableText>Color: {product.colors}</TableText>
          </div>
        </td>

        {decoded?.role !== "manager" && (
          <td className={classes}>
            <Button
              placeholder={""}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                dispatch(setProduct(product));
                dispatch(
                  setButtonText((e.target as HTMLButtonElement).innerText)
                );
                handleOpen();
              }}
              className="capitalize"
              variant="gradient"
              size="sm"
            >
              Sell Product
            </Button>
          </td>
        )}

        {decoded?.role !== "seller" && (
          <>
            {" "}
            <td className={classes}>
              <Button
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  dispatch(
                    setButtonText((e.target as HTMLButtonElement).innerText)
                  );
                  handleOpen();
                  dispatch(setProduct(product));
                }}
                className="capitalize"
                placeholder={""}
                variant="gradient"
                size="sm"
              >
                Create Variant
              </Button>
            </td>
            <td className={classes}>
              <Tooltip content="Edit Product">
                <IconButton
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    dispatch(setProductId(product._id));
                    dispatch(setProduct(product));
                    dispatch(
                      setButtonText((e.target as HTMLButtonElement).innerText)
                    );
                    handleOpen();
                  }}
                  placeholder={""}
                  variant="text"
                >
                  <PencilIcon className="h-4 w-4" />
                </IconButton>
              </Tooltip>
            </td>
          </>
        )}
      </tr>
      <MModal modalTitle={modalTitle} open={open} handleOpen={handleOpen}>
        {buttonText === "Sell Product" ? (
          <SellProductModalContent handleOpen={handleOpen} />
        ) : buttonText === "Create Variant" ? (
          <CreateVariantContant handleOpen={handleOpen} />
        ) : (
          <UpdateProductModalContent handleOpen={handleOpen} />
        )}
      </MModal>
    </>
  );
};

export default ProductListCard;
