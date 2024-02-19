/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Link } from "react-router-dom";

type TManagerSidebarProps = {
  closeDrawer: any;
};

const ManagerSidebar = ({ closeDrawer }: TManagerSidebarProps) => {
  return (
    <>
      <List placeholder={""} className="p-0">
        <Link onClick={() => closeDrawer()} to="/manager/products">
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
            </ListItemPrefix>
            Products
          </ListItem>
        </Link>
      </List>
      <List placeholder={""} className="p-0">
        <Link onClick={() => closeDrawer()} to="/manager/add-product">
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
            </ListItemPrefix>
            Add Product
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default ManagerSidebar;
