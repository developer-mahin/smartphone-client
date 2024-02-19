import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Form from "../components/Form/Form";
import Inputs from "../components/Form/Inputs";
import Buttons from "../components/ui/Button";
import { useChangePasswordMutation } from "../redux/features/users/userApi";
import { TResponse } from "../types/Response";
import { errorMessage } from "../utils/sonarToastMessage";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [changePassword] = useChangePasswordMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    const passwordInfo = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    try {
      const res = (await changePassword(passwordInfo)) as TResponse;
      if (res?.data?.success) {
        navigate("/login");
        toast.success(res.data.message, { id: toastId });
      }
    } catch (error) {
      errorMessage("Something went wrong!!!", 3000);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-10 w-1/4 mx-auto  bg-gray-100 rounded-[10px]">
        <Form onSubmit={onSubmit}>
          <h4 className="text-xl font-family-lato font-extrabold text-center">
            Change Password
          </h4>
          <div className="mt-10 space-y-4">
            <Inputs
              required={true}
              type="password"
              name="oldPassword"
              label="Old Password"
              placeholder="Enter old password"
            />
            <Inputs
              required={true}
              type="password"
              name="newPassword"
              label="New Password"
              placeholder="Enter new password"
            />
            <div className="mt-10">
              <Buttons type="submit">Change Password</Buttons>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
