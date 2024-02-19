import { Alert, Button, Input, Typography } from "@material-tailwind/react";
import { FieldValues, useForm } from "react-hook-form";
// import { useSelesProductMutation } from "../../redux/features/selesManagement/selesApi";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "sonner";
import { useSelesProductMutation } from "../../redux/features/selesManagement/selesApi";
import { useAppSelector } from "../../redux/hooks";
import { TResponse } from "../../types/Response";
import { loadingMessage, successMessage } from "../../utils/sonarToastMessage";
// import { useSelesProductMutation } from "../../redux/features/products/productApi";
import { jsPDF } from "jspdf";

type TSellProductModalContentProps = {
  handleOpen: () => void;
};

const SellProductModalContent = ({
  handleOpen,
}: TSellProductModalContentProps) => {
  const [name, setBuyerName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const { handleSubmit, register, reset } = useForm();
  const { product } = useAppSelector((state) => state.product);
  const { user } = useAppSelector((state) => state.user);
  const [openAlert, setOpenAlert] = useState(false);
  const [sellProduct] = useSelesProductMutation();
  // const [sellProduct] = useSelesProductMutation();

  const onSubmit = async (data: FieldValues) => {
    loadingMessage("Loading...", 2000);

    const sellsData = {
      productId: product?._id,
      sellerId: user?.userId,
      nameOfBuyer: data.nameOfBuyer,
      quantity: Number(data.quantity),
      selsDate: new Date().toDateString().slice(4, 15),
    };

    try {
      const res = (await sellProduct(sellsData)) as TResponse;
      if (res?.data?.success) {
        reset();
        successMessage("Product was sells successful", 3000);
        // handleOpen();
        setOpenAlert(true);
      }
    } catch (error) {
      toast.error("Something went wrong!!!");
    }
  };

  const pdfGenerator = () => {
    const doc = new jsPDF();
    const { quantity, buyerName, productName, date } = {
      quantity: productQuantity,
      buyerName: name,
      productName: product?.product_name,
      date: new Date(),
    };
    // Set font properties
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Set text color (black)
    doc.setTextColor(0, 0, 0);
    const textContent = `
        Quantity: ${quantity}
        Buyer Name: ${buyerName}
        Product Name: ${productName}
        Date: ${date.toISOString().slice(0, 10)}
    `;

    doc.text(textContent, 10, 10);
    doc.save("a4.pdf");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-10">
        <Input
          {...register("nameOfBuyer")}
          label="Buyer Name"
          type="text"
          required
          onChange={(e) => setBuyerName(e.target.value)}
          crossOrigin={""}
        />
        <Input
          {...register("quantity")}
          label="Quantity"
          type="number"
          onChange={(e) => setProductQuantity(e.target.value)}
          required
          crossOrigin={""}
        />
        <Button type="submit" placeholder={""}>
          Sell
        </Button>
      </form>
      <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography placeholder={""} variant="h6" className="mb-1 capitalize">
          Let's Download this product invoice
        </Typography>
        <div className="mt-4 flex gap-3">
          <Button
            placeholder={""}
            className="font-medium bg-white text-black"
            onClick={() => {
              setOpenAlert(false);
              pdfGenerator();
              handleOpen();
            }}
          >
            Download Invoice
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default SellProductModalContent;
