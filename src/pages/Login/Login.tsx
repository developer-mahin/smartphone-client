/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Common/Logo";
import SocialIcon from "../../components/Common/SocialIcon";
import Form from "../../components/Form/Form";
import Inputs from "../../components/Form/Inputs";
import Buttons from "../../components/ui/Button";
import { socialIcons } from "../../data/socialIcons";
import { useLoginUserMutation } from "../../redux/features/users/userApi";
import { setUser } from "../../redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  errorMessage,
  loadingMessage,
  successMessage,
} from "../../utils/sonarToastMessage";
import { ExtendedJwtPayload } from "../../types/global";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { token, user } = useAppSelector((state) => state.user);
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  // const defaultValues = {
  //   email: "mdmahin1310@gmail.com",
  //   password: "46348e35757",
  // };

  const onSubmit = async (data: FieldValues) => {
    loadingMessage("Loading...", 2000);

    try {
      const res = await loginUser(data).unwrap();
      const token = res?.data?.accessToken;
      const user = jwtDecode(token) as ExtendedJwtPayload;

      dispatch(
        setUser({
          user: user,
          token: token,
        })
      );

      if (res.data.needsPasswordChange) {
        navigate("/change-password");
      } else {
        navigate(`/${user.role}/dashboard`);
      }

      successMessage("User login successfully", 5000);
    } catch (error: any) {
      errorMessage(error.message, 2000);
    }
  };

  useEffect(() => {
    if (token) {
      navigate(`/${user!.role}/dashboard`);
    }
  }, [token, navigate, user]);

  return (
    <div className="bg-[#e9eef1] h-screen flex justify-center items-center py-[150px]">
      <div className="w-[500px] mx-auto px-3">
        <Logo />
        <div className="p-10  bg-white rounded-[10px] mt-10">
          <Form onSubmit={onSubmit}>
            <h4 className="text-xl font-family-lato font-extrabold text-center">
              Login
            </h4>
            <div className="mt-10 space-y-4">
              <Inputs
                required={true}
                type="email"
                name="email"
                label="Email"
                placeholder="Enter email"
              />
              <Inputs
                required={true}
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
              />
              <div className="mt-10">
                <Buttons type="submit">Login</Buttons>
              </div>
            </div>
          </Form>

          <div>
            <p className="text-center py-5 text-gray-600">Forgot Password?</p>
          </div>

          <SocialIcon socialIcons={socialIcons} />

          <div className="mt-10">
            <p className="text-center text-gray-600">
              By clicking continue, you agree to our{" "}
              <Link to="/" className="text-[#10B981]">
                Terms of Service
              </Link>{" "}
              and &nbsp;
              <Link to="/" className="text-[#10B981]">
                Privacy Policy.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
