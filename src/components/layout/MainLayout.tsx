import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../Common/Logo";
import Container from "../Shared/Container/Container";
import Sidebar from "./Sidebar";

export function MainLayout() {
  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div>
      <div>
        <div className="">
          <div className=" border-b border-gray-300 py-2 ">
            <div className="flex items-center justify-between container mx-auto px-4">
              <Logo />
              <IconButton
                placeholder={""}
                variant="text"
                size="lg"
                onClick={openDrawer}
              >
                {isDrawerOpen ? (
                  <XMarkIcon className="h-8 w-8 stroke-2" />
                ) : (
                  <Bars3Icon className="h-8 w-8 stroke-2" />
                )}
              </IconButton>
            </div>
          </div>
          <div className="py-10">
            <Container>
              <Outlet />
            </Container>
          </div>
        </div>

        <Sidebar
          closeDrawer={closeDrawer}
          handleOpen={handleOpen}
          isDrawerOpen={isDrawerOpen}
          open={open}
        />
      </div>
    </div>
  );
}
