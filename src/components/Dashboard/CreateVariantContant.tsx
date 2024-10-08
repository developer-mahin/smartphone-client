/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "@material-tailwind/react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateProductMutation } from "../../redux/features/products/productApi";
import { TUserState } from "../../redux/features/users/userSlice";
import { useAppSelector } from "../../redux/hooks";
import { TResponse } from "../../types/Response";
import { imageUploadIntoImgbb } from "../../utils/imageUploadInImgbb";
import { successMessage } from "../../utils/sonarToastMessage";

type TCreateVariantContant = {
  handleOpen: () => void;
};
const CreateVariantContant = ({ handleOpen }: TCreateVariantContant) => {
  const { product } = useAppSelector((state) => state.product);
  const { handleSubmit, register, reset } = useForm();
  const { user } = useAppSelector((state): TUserState => state?.user);
  const [createProduct] = useCreateProductMutation();

  const {
    product_name,
    price,
    quantity,
    release_date,
    brand,
    model,
    operating_system,
    storage_capacity,
    screen_size,
    battery_type,
    colors,
    display_resolution,
    material,
    network,
    ram,
    camera_quality,
    battery_life,
    product_image,
  } = product;

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading....");
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);

    const newData = {
      product_name: data.product_name,
      product_image: product_image,
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

    if (data.image.length > 0) {
      const image_url = await imageUploadIntoImgbb(formData);
      const productInfo = {
        ...newData,
        product_image: image_url,
      };

      try {
        const res = (await createProduct(productInfo)) as TResponse;
        if (res.error) {
          toast.error(res.error.data.message, { id: toastId });
        }
        successMessage("Product was create successful", 3000);
        handleOpen();
        reset();
      } catch (error) {
        toast.error("Something went wrong!!");
      }
    } else {
      const productInfo = {
        ...newData,
        productId: product._id,
      };

      try {
        const res = (await createProduct(productInfo)) as TResponse;
        if (res.error) {
          toast.error(res.error.data.message, { id: toastId });
        }
        successMessage("Product was create successful", 3000);
        handleOpen();
        reset();
      } catch (error) {
        toast.error("Something went wrong!!");
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-3 gap-4">
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("product_name")}
            defaultValue={product_name}
            label="Product Name"
          />
          <Input
            type="number"
            crossOrigin={""}
            required
            {...register("price")}
            defaultValue={price}
            label="Price"
          />
          <Input
            type="number"
            crossOrigin={""}
            required
            {...register("quantity")}
            defaultValue={quantity}
            label="Quantity"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("release_date")}
            defaultValue={release_date}
            label="Release Date"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("brand")}
            defaultValue={brand}
            label="Brand"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("model")}
            defaultValue={model}
            label="Model"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("operating_system")}
            defaultValue={operating_system}
            label="Operating System"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("storage_capacity")}
            defaultValue={storage_capacity}
            label="Storage Capacity"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("screen_size")}
            defaultValue={screen_size}
            label="Screen Size"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("battery_type")}
            defaultValue={battery_type}
            label="Battery Type"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("colors")}
            defaultValue={colors}
            label="Colors"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("display_resolution")}
            defaultValue={display_resolution}
            label="display_resolution"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("material")}
            defaultValue={material}
            label="Material"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("network")}
            defaultValue={network}
            label="Network"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("ram")}
            defaultValue={ram}
            label="Ram"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("camera_quality")}
            defaultValue={camera_quality}
            label="Camera Quality"
          />
          <Input
            type="text"
            crossOrigin={""}
            required
            {...register("battery_life")}
            defaultValue={battery_life}
            label="Battery Life"
          />
          <Input
            crossOrigin={""}
            type="file"
            {...register("image")}
            label="product_image"
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

export default CreateVariantContant;
