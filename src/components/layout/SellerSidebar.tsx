/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Link } from "react-router-dom";

type TSellerSidebarProps = {
  closeDrawer: any;
};

const SellerSidebar = ({ closeDrawer }: TSellerSidebarProps) => {
  return (
    <>
      <List placeholder={""} className="p-0">
        <Link onClick={() => closeDrawer()} to="/seller/products">
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
            </ListItemPrefix>
            Products
          </ListItem>
        </Link>
      </List>
      <List placeholder={""} className="p-0">
        <Link onClick={() => closeDrawer()} to="/seller/seels-history">
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
            </ListItemPrefix>
            Seels History
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default SellerSidebar;
