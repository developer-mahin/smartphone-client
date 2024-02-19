import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dashboardMenu } from "../../data/dashboardMenu";
import Logo from "../Common/Logo";
import { DashboardLayoutHeader } from "../Shared/Header/DashboardLayoutHeader";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/users/userSlice";

export function DashboardLayout() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <React.Fragment>
        <div className="flex items-center justify-between">
          <DashboardLayoutHeader setOpen={setOpen} />
        </div>

        <Drawer placeholder={""} open={open} onClose={closeDrawer}>
          <div className="mb-2 flex items-center justify-between p-4">
            <div className="px-4">
              <Logo />
            </div>
            <IconButton
              placeholder={""}
              variant="text"
              color="blue-gray"
              onClick={closeDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <List onClick={closeDrawer} placeholder={""}>
            {dashboardMenu?.map((item, index: number) => {
              return (
                <Link to={item.path} key={index}>
                  <ListItem placeholder={""}>
                    <ListItemPrefix placeholder={""}>{item.svg}</ListItemPrefix>
                    {item.name}
                  </ListItem>
                </Link>
              );
            })}
          </List>
          <Button
            placeholder={""}
            onClick={() => dispatch(logOut())}
            className="mt-3 ml-5"
            size="sm"
          >
            Log Out
          </Button>
        </Drawer>
      </React.Fragment>
    </>
  );
}
