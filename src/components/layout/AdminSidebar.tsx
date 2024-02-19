/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { adminSidebar } from "../../data/adminSidebarData";

type TAdminSidebarProps = {
  open: number;
  handleOpen: any;
  closeDrawer: any;
};

const AdminSidebar = ({
  open,
  handleOpen,
  closeDrawer,
}: TAdminSidebarProps) => {
  return (
    <>
      <Accordion
        placeholder={""}
        open={open === 1}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${
              open === 1 ? "rotate-180" : ""
            }`}
          />
        }
      >
        <ListItem placeholder={""} className="p-0" selected={open === 1}>
          <AccordionHeader
            placeholder={""}
            onClick={() => handleOpen(1)}
            className="border-b-0 p-3"
          >
            <ListItemPrefix placeholder={""}>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography
              placeholder={""}
              color="blue-gray"
              className="mr-auto font-normal"
            >
              User Management
            </Typography>
          </AccordionHeader>
        </ListItem>

        <AccordionBody className="py-1">
          <List placeholder={""} className="p-0">
            {adminSidebar[0]?.user?.map((item, i) => (
              <Link key={i} onClick={() => closeDrawer()} to={item?.path}>
                <ListItem placeholder={""}>
                  <ListItemPrefix placeholder={""}>
                    <UserIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  {item?.name}
                </ListItem>
              </Link>
            ))}
          </List>
        </AccordionBody>
      </Accordion>

      <Accordion
        placeholder={""}
        open={open === 2}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${
              open === 2 ? "rotate-180" : ""
            }`}
          />
        }
      >
        <ListItem placeholder={""} className="p-0" selected={open === 2}>
          <AccordionHeader
            placeholder={""}
            onClick={() => handleOpen(2)}
            className="border-b-0 p-3"
          >
            <ListItemPrefix placeholder={""}>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography
              placeholder={""}
              color="blue-gray"
              className="mr-auto font-normal"
            >
              Product Management
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List placeholder={""} className="p-0">
            {adminSidebar[1]?.product?.map((item, i) => (
              <Link key={i} onClick={() => closeDrawer()} to={item?.path}>
                <ListItem placeholder={""}>
                  <ListItemPrefix placeholder={""}>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  {item?.name}
                </ListItem>
              </Link>
            ))}
          </List>
        </AccordionBody>
      </Accordion>

      <Accordion
        placeholder={""}
        open={open === 3}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${
              open === 3 ? "rotate-180" : ""
            }`}
          />
        }
      >
        <ListItem placeholder={""} className="p-0" selected={open === 3}>
          <AccordionHeader
            placeholder={""}
            onClick={() => handleOpen(3)}
            className="border-b-0 p-3"
          >
            <ListItemPrefix placeholder={""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            <Typography
              placeholder={""}
              color="blue-gray"
              className="mr-auto font-normal"
            >
              Branch Management
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List placeholder={""} className="p-0">
            {adminSidebar[2].branch?.map((item, i) => (
              <Link key={i} onClick={() => closeDrawer()} to={item.path}>
                <ListItem placeholder={""}>
                  <ListItemPrefix placeholder={""}>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  {item.name}
                </ListItem>
              </Link>
            ))}
          </List>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AdminSidebar;
