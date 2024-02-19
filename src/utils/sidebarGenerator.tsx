import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  AccordionBody,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types/global";

export const sideBarItemGenerator = (items: TUserPath[], role: string) => {
  const sideBar = items.reduce((acc: TSidebarItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: (
          <NavLink to={`/${role}/${item.path}`}>
            <List placeholder={""} className="p-0">
              <ListItem placeholder={""}>
                <ListItemPrefix placeholder={""}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                {item.name}
              </ListItem>
            </List>
          </NavLink>
        ),
      });
    }

    if (item.children) {
      acc.push({
        key: item.name!,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <AccordionBody className="py-1">
                  <List placeholder={""} className="p-0">
                    <ListItem placeholder={""}>
                      <ListItemPrefix placeholder={""}>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      {item.name}
                    </ListItem>
                    <NavLink to={`/${role}/${item.path}`}>
                      <ListItem placeholder={""}>
                        <ListItemPrefix placeholder={""}>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        {child.name}
                      </ListItem>
                    </NavLink>
                  </List>
                </AccordionBody>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sideBar;
};
