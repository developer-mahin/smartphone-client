/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  MagnifyingGlassIcon,
  PowerIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  Drawer,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { jwtDecode } from "jwt-decode";
import { logOut } from "../../redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ExtendedJwtPayload } from "../../types/global";
import Logo from "../Common/Logo";
import AdminSidebar from "./AdminSidebar";
import SellerSidebar from "./SellerSidebar";
import ManagerSidebar from "./ManagerSidebar";

type TSidebarProps = {
  isDrawerOpen: boolean;
  closeDrawer: any;
  open: number;
  handleOpen: any;
};

const userRole = {
  SUPERADMIN: "superAdmin",
  MANAGER: "manager",
  SELLER: "seller",
};

const Sidebar = ({
  isDrawerOpen,
  closeDrawer,
  open,
  handleOpen,
}: TSidebarProps) => {
  let sidebarItem;
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  let user: ExtendedJwtPayload | undefined;
  if (token) {
    user = jwtDecode(token);
  }

  const role = user?.role;

  if (role)
    switch (role) {
      case userRole.SUPERADMIN:
        sidebarItem = (
          <AdminSidebar
            closeDrawer={closeDrawer}
            open={open}
            handleOpen={handleOpen}
          />
        );
        break;
      case userRole.MANAGER:
        sidebarItem = <ManagerSidebar closeDrawer={closeDrawer} />;
        break;
      case userRole.SELLER:
        sidebarItem = <SellerSidebar closeDrawer={closeDrawer} />;
        break;

      default:
        break;
    }

  return (
    <Drawer placeholder={""} open={isDrawerOpen}  onClose={closeDrawer}>
      <Card
        placeholder={""}
        color="transparent"
        shadow={false}
        className="h-[calc(100vh-2rem)] w-full p-4"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <IconButton
            placeholder={""}
            variant="text"
            size="lg"
            onClick={closeDrawer}
          >
            <XMarkIcon className="size-6 stroke-2" />
          </IconButton>
        </div>
        <div className="p-2">
          <Input
            crossOrigin={""}
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            label="Search"
          />
        </div>
        <List placeholder={""}>
          {sidebarItem}
          <hr className="my-2 border-blue-gray-50" />

          <ListItem onClick={() => dispatch(logOut())} placeholder={""}>
            <ListItemPrefix placeholder={""}>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </Drawer>
  );
};

export default Sidebar;
