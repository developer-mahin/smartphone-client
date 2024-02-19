import { Button, Input, Typography } from "@material-tailwind/react";
import {
  brandValues,
  operatingSystem,
  priceValues,
  storageCapacity,
} from "../../data/filterPriceValues";
import { useBulkDeleteProductMutation } from "../../redux/features/products/productApi";
import {
  clearBulkDeleteState,
  setBrand,
  setCameraQuality,
  setModel,
  setOperatingSystem,
  setPrice,
  setReleaseDate,
  setScreenSize,
  setStorageCapacity
} from "../../redux/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  errorMessage,
  loadingMessage,
  successMessage,
} from "../../utils/sonarToastMessage";
import FilterSelectField from "../Common/FilterSelectField";

const FilterBar = () => {
  const dispatch = useAppDispatch();
  const { productIdForBulkDelete } = useAppSelector((state) => state.product);
  const [bulkDeleteProduct, { isError }] = useBulkDeleteProductMutation();

  if (isError) {
    return errorMessage("something went wrong", 3000);
  }

  const handleDeleteMultipleProducts = () => {
    loadingMessage("Loading...", 2000);
    bulkDeleteProduct(productIdForBulkDelete);
    dispatch(clearBulkDeleteState());
    successMessage("products deleted", 3000);
  };

  return (
    <div className="p-4 bg-gray-100 shadow h-fit rounded-md">
      <Typography placeholder={""} className="font-semibold mb-4">
        Filter Options
      </Typography>

      <form>
        <div className="mt-4">
          <div className="flex flex-col space-y-1">
            <FilterSelectField
              mappedValue={priceValues}
              handleValue={(e) => dispatch(setPrice(e.target.value))}
              label="Price"
            />
            <FilterSelectField
              mappedValue={brandValues}
              handleValue={(e) => dispatch(setBrand(e.target.value))}
              label="Brand"
            />
            <FilterSelectField
              mappedValue={operatingSystem}
              handleValue={(e) => dispatch(setOperatingSystem(e.target.value))}
              label="Operating System"
            />
            <FilterSelectField
              mappedValue={storageCapacity}
              handleValue={(e) => dispatch(setStorageCapacity(e.target.value))}
              label="Storage Capacity"
            />
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <Input
            onBlur={(e) => dispatch(setReleaseDate(e.target.value))}
            crossOrigin={""}
            label="Release Date"
          />
          <Input
            onBlur={(e) => dispatch(setModel(e.target.value))}
            crossOrigin={""}
            label="Model"
          />

          <Input
            crossOrigin={""}
            label="Screen Size"
            onBlur={(e) => dispatch(setScreenSize(e.target.value))}
          />
          <Input
            crossOrigin={""}
            label="Camera Quality"
            onBlur={(e) => dispatch(setCameraQuality(e.target.value))}
          />
        </div>
        <div className="flex items-center flex-col gap-2 mt-6">
          <Button placeholder={""} fullWidth size="sm" className="capitalize">
            Apply Filters
          </Button>
          <Button
            placeholder={""}
            onClick={() => handleDeleteMultipleProducts()}
            className="capitalize"
            variant="gradient"
            size="sm"
            fullWidth
            disabled={productIdForBulkDelete.length === 0}
          >
            Delete selected product
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
