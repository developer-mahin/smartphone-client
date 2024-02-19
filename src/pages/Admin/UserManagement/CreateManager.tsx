/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "@material-tailwind/react";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import Form from "../../../components/Form/Form";
import Inputs from "../../../components/Form/Inputs";
import Selects from "../../../components/Form/Selects";
import { genderOptions } from "../../../constant/Global";
import { useCreateManagerMutation } from "../../../redux/features/superAdmin/userManagement.api";
import { TResponse } from "../../../types/Response";
import { useGetAllBranchesQuery } from "../../../redux/features/superAdmin/branchManagement.api";
import { imageUploadIntoImgbb } from "../../../utils/imageUploadInImgbb";

const CreateManager = () => {
  const [createManager] = useCreateManagerMutation();
  const { data: branches, isFetching } = useGetAllBranchesQuery(undefined);

  const branchOptions = branches?.data?.map((item: any) => ({
    value: item._id,
    label: item.branchName,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");
    const image = data.image;

    const formData = new FormData();
    formData.append("image", image);

    const image_url = await imageUploadIntoImgbb(formData);

    const managerInfo = {
      password: "1234562",
      manager: {
        ...data,
        profileImage: image_url,
      },
    };

    const res = (await createManager(managerInfo)) as TResponse;
    if (res.error) {
      toast.error(res.error?.data?.message, { id: toastId });
    } else {
      toast.success("Successfully Created Manager", { id: toastId });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1 className="text-3xl font-semibold text-gray-700 mb-4">
        Create Manage
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

        <Inputs required={true} type="text" name="address" label="Address" />

        <Selects
          disabled={isFetching}
          label="Branch"
          name="managerOfBranch"
          options={branchOptions}
        />

        <Controller
          name="image"
          render={({ field: { value, onChange, ...field } }) => (
            <Input
              crossOrigin={""}
              required
              label="Picture"
              {...field}
              name="image"
              value={value?.fileName}
              onChange={(e) => onChange(e.target.files?.[0])}
              type="file"
              accept="image/*"
            />
          )}
        />
      </div>

      <Button placeholder={""} type="submit" className="mt-4">
        Create Mange
      </Button>
    </Form>
  );
};

export default CreateManager;
