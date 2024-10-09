import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Avatar, Button, Divider, Menu, MenuItem, Card } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (item) => {
    navigate(item.path);
  };

  return (
    <Card className="flex flex-col h-screen">
      <div className="p-4">
        <div className="mb-8">
          <span className="font-bold text-2xl text-indigo-600">Osh Social</span>
        </div>

        <div className="space-y-4">
          {navigationMenu.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigate(item)}
              className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-indigo-600"
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      <div className="p-4 mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            <div>
              <p className="font-semibold">{auth.user?.firstName + " " + auth.user?.lastName}</p>
              <p className="text-sm text-gray-500">@{auth.user?.firstName.toLowerCase() + auth.user?.lastName.toLowerCase()}</p>
            </div>
          </div>
          
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpen}
          >
            <MoreVertIcon />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
