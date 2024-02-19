import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Button,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import {
  clearBulkDeleteState,
  searchProduct,
  setBrand,
  setCameraQuality,
  setModel,
  setOperatingSystem,
  setPrice,
  setReleaseDate,
  setScreenSize,
  setStorageCapacity,
} from "../../redux/features/products/productSlice";
import FilterSelectField from "../Common/FilterSelectField";
import {
  brandValues,
  operatingSystem,
  priceValues,
  storageCapacity,
} from "../../data/filterPriceValues";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ExtendedJwtPayload } from "../../types/global";
import { jwtDecode } from "jwt-decode";
import { useBulkDeleteProductMutation } from "../../redux/features/products/productApi";
import { toast } from "sonner";
import { TResponse } from "../../types/Response";

const ProductListTableHeader = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const { productIdForBulkDelete } = useAppSelector((state) => state.product);
  const [bulkDeleteProduct] = useBulkDeleteProductMutation();

  let decoded: ExtendedJwtPayload | undefined;
  if (token) {
    decoded = jwtDecode(token);
  }

  const handleDeleteMultipleProducts = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const res = (await bulkDeleteProduct(
        productIdForBulkDelete
      )) as TResponse;
      if (res.error) {
        toast.error("Something went wrong", { id: toastId });
      }
      dispatch(clearBulkDeleteState());
      toast.success("products deleted", { id: toastId });
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <CardHeader
      placeholder={""}
      floated={false}
      shadow={false}
      className="rounded-none"
    >
      <div className="mb-8 flex lg:flex-row flex-col  items-center justify-between gap-8">
        <div>
          <div>
            <Typography placeholder={""} variant="h5" color="blue-gray">
              Product list
            </Typography>
            <Typography
              placeholder={""}
              color="gray"
              className="mt-1 font-normal"
            >
              See information about all products
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72 space-y-2">
              <Input
                crossOrigin={""}
                label="Search"
                onChange={(e) => dispatch(searchProduct(e.target.value))}
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
              <Input
                onChange={(e) => dispatch(setReleaseDate(e.target.value))}
                crossOrigin={""}
                label="Release Date"
              />
              <Input
                onChange={(e) => dispatch(setModel(e.target.value))}
                crossOrigin={""}
                label="Model"
              />

              <Input
                crossOrigin={""}
                label="Screen Size"
                onChange={(e) => dispatch(setScreenSize(e.target.value))}
              />
              <Input
                crossOrigin={""}
                label="Camera Quality"
                onChange={(e) => dispatch(setCameraQuality(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-5">
          <div className="flex flex-col gap-y-2">
            <div>
              <FilterSelectField
                mappedValue={priceValues}
                handleValue={(e) => dispatch(setPrice(e.target.value))}
                label="Price"
              />
            </div>
            <div>
              <FilterSelectField
                mappedValue={brandValues}
                handleValue={(e) => dispatch(setBrand(e.target.value))}
                label="Brand"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div>
              <FilterSelectField
                mappedValue={operatingSystem}
                handleValue={(e) =>
                  dispatch(setOperatingSystem(e.target.value))
                }
                label="Operating System"
              />
            </div>
            <div>
              <FilterSelectField
                mappedValue={storageCapacity}
                handleValue={(e) =>
                  dispatch(setStorageCapacity(e.target.value))
                }
                label="Storage Capacity"
              />
            </div>
          </div>
          {decoded?.role !== "seller" && (
            <Button
              placeholder={""}
              onClick={() => handleDeleteMultipleProducts()}
              className="capitalize col-span-2"
              variant="gradient"
              size="sm"
              fullWidth
              disabled={productIdForBulkDelete.length === 0}
            >
              Delete selected product
            </Button>
          )}
        </div>
      </div>
    </CardHeader>
  );
};

export default ProductListTableHeader;
