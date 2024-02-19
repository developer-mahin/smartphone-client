import { Button } from "@material-tailwind/react";
import { toast } from "sonner";
import {
  useDeleteManagerMutation,
  useDeleteSellerMutation,
} from "../../redux/features/superAdmin/userManagement.api";
import { useAppSelector } from "../../redux/hooks";
import { TResponse } from "../../types/Response";

type TDeleteUserModalContent = {
  handleOpen: () => void;
};

const DeleteUserModalContent = ({ handleOpen }: TDeleteUserModalContent) => {
  const [deleteManager] = useDeleteManagerMutation();
  const [deleteSeller] = useDeleteSellerMutation();
  const { product } = useAppSelector((state) => state.product);

  const handleDeleteDelete = async (id: string) => {
    const toastId = toast.loading("Loading...");
    try {
      const res =
        product?.user?.role === "manager"
          ? ((await deleteManager(id)) as TResponse)
          : ((await deleteSeller(id)) as TResponse);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      }
      toast.success(res.data?.message, { id: toastId });
      handleOpen();
    } catch (error) {
      toast.error("Something went wrong!!");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => handleDeleteDelete(product._id)}
        className="bg-red-500"
        placeholder={""}
      >
        Delete
      </Button>
      <Button onClick={() => handleOpen()} placeholder={""}>
        Cancel
      </Button>
    </div>
  );
};

export default DeleteUserModalContent;
