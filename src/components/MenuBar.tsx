import { Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";



const MenuBar = () => {
    const [open, setOpen] = useState(false);

    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            text: "About",
            icon: <InfoIcon />,
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
        },
        {
            text: "Price",
            icon: <ShoppingCartRoundedIcon />,
        },
    ];

    return (
        <div className="">
            <div className="navbar-menu-container text-[2rem] cursor-pointer ">
                <HiOutlineMenu  className="" onClick={() => setOpen(true)} />
            </div>

            <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
                <Box
                    sx={{ width: 350 }}
                    role="presentation"
                    onClick={() => setOpen(false)}
                    onKeyDown={() => setOpen(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </div>
    );
};

export default MenuBar;
