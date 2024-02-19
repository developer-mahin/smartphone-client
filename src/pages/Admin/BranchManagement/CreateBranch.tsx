import { FieldValues, SubmitHandler } from "react-hook-form";
import Form from "../../../components/Form/Form";
import Inputs from "../../../components/Form/Inputs";
import { Button, Typography } from "@material-tailwind/react";
import { useCreateBranchMutation } from "../../../redux/features/superAdmin/branchManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/Response";

const CreateBranch = () => {
  const [createBranch] = useCreateBranchMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading....");

    try {
      const res = (await createBranch(data)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      }
      toast.success(res.data?.message, { id: toastId });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="lg:w-[400px] mx-auto">
      <Typography
        placeholder={""}
        className="text-3xl text-gray-700 font-semibold mb-3"
      >
        Create Branch
      </Typography>
      <Form onSubmit={onSubmit}>
        <div className=" space-y-4">
          <Inputs
            label="Branch Name"
            name="branchName"
            required={true}
            type="text"
          />
          <Inputs
            label="Branch Location"
            name="branchLocation"
            required={true}
            type="text"
          />
          <Button placeholder={""} type="submit">
            Create Branch
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateBranch;
