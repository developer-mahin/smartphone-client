import { Button, Input } from "@material-tailwind/react";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import Form from "../../../components/Form/Form";
import Inputs from "../../../components/Form/Inputs";
import Selects from "../../../components/Form/Selects";
import { genderOptions } from "../../../constant/Global";
import { useCreateSellerMutation } from "../../../redux/features/superAdmin/userManagement.api";
import { TResponse } from "../../../types/Response";
import { imageUploadIntoImgbb } from "../../../utils/imageUploadInImgbb";

const CreateSeller = () => {
  const [createSeller] = useCreateSellerMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    const image = data.image;

    const formData = new FormData();
    formData.append("image", image);

    const image_url = await imageUploadIntoImgbb(formData);

    const sellerInfo = {
      password: "1234562",
      seller: {
        ...data,
        profileImage: image_url,
      },
    };

    const res = (await createSeller(sellerInfo)) as TResponse;
    if (res.error) {
      toast.error(res.error?.data?.message, { id: toastId });
    } else {
      toast.success("Successfully Created Seller", { id: toastId });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1 className="text-3xl font-semibold text-gray-700 mb-4">
        Create Seller
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <Inputs
          required={true}
          type="text"
          name="name.firstName"
          label="First Name"
        />
        <Inputs
          required={false}
          type="text"
          name="name.middleName"
          label="Middle Name"
        />
        <Inputs
          required={true}
          type="text"
          name="name.lastName"
          label="Last Name"
        />
        <Inputs
          required={true}
          type="number"
          name="contactNo"
          label="Contact No"
        />
        <Inputs
          required={true}
          type="text"
          name="emergencyContactNo"
          label="Emergency Contact No"
        />

        <Inputs required={true} type="email" name="email" label="Email" />

        <Selects label="Gender" name="gender" options={genderOptions} />
        <Inputs
          required={true}
          type="date"
          name="dateOfBirth"
          label="Date Of Birth"
        />

        <Inputs
          required={true}
          type="text"
          name="location.country"
          label="Country"
        />
        <Inputs required={true} type="text" name="location.city" label="City" />
        <Inputs required={true} type="text" name="location.home" label="Home" />

        <Controller
          name="image"
          render={({ field: { value, onChange, ...field } }) => (
            <Input
              required
              label="Picture"
              crossOrigin={""}
              {...field}
              name="image"
              accept="image/*"
              value={value?.fileName}
              onChange={(e) => onChange(e.target.files?.[0])}
              type="file"
            />
          )}
        />
      </div>

      <Button placeholder={""} type="submit" className="mt-4">
        Create Seller
      </Button>
    </Form>
  );
};

export default CreateSeller;
