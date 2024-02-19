/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { addProductInputs } from "../../../data/addProductInputs";
import {
  useCreateProductMutation,
  useGetAllProductsQuery,
} from "../../../redux/features/products/productApi";
import { TUserState } from "../../../redux/features/users/userSlice";
import { useAppSelector } from "../../../redux/hooks";
import {
  errorMessage,
  loadingMessage,
  successMessage,
} from "../../../utils/sonarToastMessage";
import { imageUploadIntoImgbb } from "../../../utils/imageUploadInImgbb";
import { toast } from "sonner";

const AddProduct = () => {
  const { handleSubmit, register, reset } = useForm();
  const { user } = useAppSelector((state): TUserState => state.user);
  const [createProduct, { data, isError }] = useCreateProductMutation();
  const { refetch } = useGetAllProductsQuery("");

  useEffect(() => {
    if (data) {
      successMessage(data.message, 3000);
    }
    if (isError) {
      errorMessage(
        "something went wrong to create product please try again ",
        3000
      );
    }
  }, [data, isError]);

  const onSubmit = async (data: FieldValues) => {
    loadingMessage("Loading...", 5000);
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);

    const newData = {
      product_name: data.product_name,
      price: Number(data.price),
      quantity: Number(data.quantity),
      release_date: data.release_date,
      brand: data.brand,
      model: data.model,
      operating_system: data.operating_system,
      storage_capacity: data.storage_capacity,
      screen_size: data.screen_size,
      battery_type: data.battery_type,
      colors: data.colors,
      display_resolution: data.display_resolution,
      material: data.material,
      network: data.network,
      ram: data.ram,
      camera_quality: data.camera_quality,
      battery_life: data.battery_life,
      manager: user?.userId,
    };

    const imageData = await imageUploadIntoImgbb(formData);

    try {
      const productInfo = {
        ...newData,
        product_image: imageData,
      };
      createProduct(productInfo);
      refetch();
      reset();
    } catch (error) {
      toast.error("Something went wrong!!");
    }
  };

  return (
    <div className="py-10">
      <Typography
        placeholder={""}
        className="text-4xl font-bold mb-5 text-gray-800"
      >
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-3 gap-4">
          {addProductInputs.map((item, index) => {
            return (
              <Input
                type={item.type}
                key={index}
                crossOrigin={""}
                {...register(item.name)}
                label={item.label}
                required
              />
            );
          })}
          <Input
            crossOrigin={""}
            type="file"
            {...register("image")}
            label="product_image"
            required
            accept="image/*"
          />
        </div>
        <Button placeholder={""} type="submit" className="mt-4">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
