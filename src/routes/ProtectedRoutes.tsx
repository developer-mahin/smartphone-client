import { jwtDecode } from "jwt-decode";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ExtendedJwtPayload } from "../types/global";

type TProtectedRoutesProps = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoutes = ({ children, role }: TProtectedRoutesProps) => {
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  let user: ExtendedJwtPayload | undefined;
  if (token) {
    user = jwtDecode(token);
  }

  if (role !== undefined && role !== user?.role) {
    dispatch(logOut());
  }

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (token) {
    return children;
  }
};

export default ProtectedRoutes;
