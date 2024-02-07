import React, { useContext, useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { CalendarMonth, Label, Today } from "@mui/icons-material";
import { navbarTitleContext } from "../../Context";

type AsideTypes = {
  open: boolean;
};

const Aside: React.FC<AsideTypes> = ({ open }) => {
  const { title, setTitle } = useContext(navbarTitleContext);

  const [activeItem, setActiveItem] = useState<string>("")

  return (
    <div className="text-gray-300">
      <List>
        <ListItem
          disablePadding
          sx={{ display: "block", backgroundColor: `${title === 'Inbox' ? '#1D4ED8' : "null"}` }}
          onClick={() => setTitle("Inbox")}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <InboxIcon className="text-gray-400" />
            </ListItemIcon>
            <ListItemText primary={"Inbox"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{ display: "block", backgroundColor: `${title === 'Today' ? '#1D4ED8' : "null"}` }}
          onClick={() => setTitle("Today")}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Today className="text-gray-400" />
            </ListItemIcon>
            <ListItemText primary={"Today"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{ display: "block", backgroundColor: `${title === 'Scheduled' ? '#1D4ED8' : "null"}` }}
          onClick={() => setTitle("Scheduled")}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CalendarMonth className="text-gray-400" />
            </ListItemIcon>
            <ListItemText
              primary={"Scheduled"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{ display: "block", backgroundColor: `${title === 'Labels' ? '#1D4ED8' : "null"}` }}
          onClick={() => setTitle("Labels")}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Label className="text-gray-400" />
            </ListItemIcon>
            <ListItemText primary={"Labels"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Aside;
