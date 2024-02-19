import { Button, MobileNav, Navbar } from "@material-tailwind/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../Common/Logo";
import Container from "../Container/Container";

type THeaderProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DashboardLayoutHeader({ setOpen }: THeaderProps) {
  const [openNav, setOpenNav] = React.useState(false);

  const openDrawer = () => setOpen(true);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="w-full">
      <Navbar
        placeholder={""}
        fullWidth
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
      >
        <Container>
          <div className="flex items-center justify-between gap-2 lg:flex-row flex-col text-blue-gray-900">
            <div className="">
              <Logo />
            </div>
            <Button
              className="capitalize lg:w-fit w-full "
              placeholder={""}
              onClick={openDrawer}
            >
              Open Dashboard
            </Button>
          </div>
          <MobileNav open={openNav}>
            <Button placeholder={""} onClick={openDrawer}>
              Open Dashboard
            </Button>
          </MobileNav>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
