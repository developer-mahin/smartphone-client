import { Typography } from "@material-tailwind/react";

const LoginCredantials = () => {
  return (
    <div>
      <div>
        <Typography placeholder={""} className="font-semibold text-lg ">
          Admin
        </Typography>
        <Typography placeholder={""}>Email: mdmahin1310@gmail.com</Typography>
        <Typography placeholder={""}>Password: 46348e35757</Typography>

        <Typography className="font-semibold text-lg " placeholder={""}>
          Manager
        </Typography>
        <Typography placeholder={""}>Email:mahenkhan83@gmail.com</Typography>
        <Typography placeholder={""}>Password: 1234562</Typography>

        <Typography className="font-semibold text-lg " placeholder={""}>
          Seller
        </Typography>
        <Typography placeholder={""}>Email:mahenkhan@gmail.com</Typography>
        <Typography placeholder={""}>Password: 1234562</Typography>
      </div>
    </div>
  );
};

export default LoginCredantials;
