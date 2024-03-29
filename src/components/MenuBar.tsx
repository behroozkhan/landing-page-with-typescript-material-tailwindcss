// // import * as React from "react";
// // import Drawer from "@mui/material/Drawer";
// // import Button from "@mui/material/Button";
// // // import { Menu, X } from "lucide-react";
// // import { NavLink } from "react-router-dom";
// // // import { menuItems } from "../constants/objData";

// import { useState } from "react"

// // const menuItems = [
// //     {
// //     id:1,
// //     name: "Home",
// //     href:"#"
// // },
// // {
// //     id:2,
// //     name: "Contact",
// //     href:"#"
// // },
// // {
// //     id:3,
// //     name: "About",
// //     href:"#"
// // },
// // ]

// // export default function TemporaryDrawer() {
// //   const [mobNav] = React.useState(menuItems);
// //   const [state, setState] = React.useState({
// //     right: false,
// //   });

// //   const toggleDrawer = (anchor: string, open: boolean) => (event: { type: string; key: string; }) => {
// //     if (
// //       event.type === "keydown" &&
// //       (event.key === "Tab" || event.key === "Shift")
// //     ) {
// //       return;
// //     }

// //     setState({ ...state, [anchor]: open });
// //   };

// //   return (
// //     <div>
// //       <React.Fragment key={"right"}>
// //         <Button onClick={toggleDrawer("right", true)}>
// //           {/* <Menu stroke="white" size={32} /> */}
// //         </Button>
// //         <Drawer
// //           anchor={"right"}
// //           open={state["right"]}
// //           onClose={toggleDrawer("right", false)}
// //         >
// //           <div
// //             style={{
// //               width: "80vw",
// //               maxWidth: "400px",
// //               height: "100%",
// //               backgroundColor: "#060B13",
// //             }}
// //           >
// //             <div
// //               onClick={toggleDrawer("right", false)}
// //               className="p-5 hover:cursor-pointer"
// //             >
// //               {/* <X stroke="white" /> */}
// //             </div>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 marginTop: "5rem",
// //                 gap: 50,
// //               }}
// //             >
// //               {mobNav.map((item) => (
// //                 <NavLink
// //                   key={item.id}
// //                   to={item.href}
// //                   onClick={toggleDrawer("right", false)}
// //                   style={{
// //                     textDecoration: "none",
// //                     border: "none",
// //                     outline: "none",
// //                   }}
// //                   className={({ isActive }) =>
// //                     isActive ||
// //                     window.location.pathname.split("/")[1] ==
// //                       item.name.toLowerCase()
// //                       ? "text-xl uppercase font-normal hover:font-medium hover:opacity-70 font-sans flex items-center text-[var(--main)]"
// //                       : "text-xl uppercase font-normal hover:font-medium hover:opacity-70 font-sans flex items-center text-white"
// //                   }
// //                 >
// //                   {item.name}{" "}
// //                 </NavLink>
// //               ))}
// //             </div>
// //           </div>
// //         </Drawer>
// //       </React.Fragment>
// //     </div>
// //   );
// // }

// import { Drawer } from "@mui/material"
// import Box from "@mui/material/Box";
// // import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import { HiOutlineBars3 } from "react-icons/hi2";
// const MenuBar = () => {
//     const [open, setOpen] = useState(false)

//     const menuOptions = [
//         {
//             text: "Home",
//             icon: <HomeIcon />,
//         },
//         {
//             text: "About",
//             icon: <InfoIcon />,
//         },
//         {
//             text: "Testimonials",
//             icon: <CommentRoundedIcon />,
//         },
//         {
//             text: "Contact",
//             icon: <PhoneRoundedIcon />,
//         },
//         {
//             text: "Cart",
//             icon: <ShoppingCartRoundedIcon />,
//         },
//     ];


//     return (
//         <div>
//             <div className="navbar-menu-container">
//                 <HiOutlineBars3 onClick={() => setOpen(true)} />
//             </div>

//             <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
//                 <Box
//                     sx={{ width: 250 }}
//                     role="presentation"
//                     onClick={() => setOpen(false)}
//                     onKeyDown={() => setOpen(false)}
//                 >
//                     <List>
//                         {menuOptions.map((item) => (
//                             <ListItem key={item.text} disablePadding>
//                                 <ListItemButton>
//                                     <ListItemIcon>{item.icon}</ListItemIcon>
//                                     <ListItemText primary={item.text} />
//                                 </ListItemButton>
//                             </ListItem>
//                         ))}
//                     </List>
//                     <Divider />
//                 </Box>
//             </Drawer>
//         </div>
//     )
// }

// export default MenuBar;


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
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
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
            text: "Testimonials",
            icon: <CommentRoundedIcon />,
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
        },
    ];

    return (
        <div className="flex justify-end">
            <div className="navbar-menu-container text-[2rem] cursor-pointer flex justify-end items-end">
                <HiOutlineMenu  className="flex" onClick={() => setOpen(true)} />
            </div>

            <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
                <Box
                    sx={{ width: 350 }}
                    // role="presentation"
                    onClick={() => setOpen(false)}
                    onKeyDown={() => setOpen(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
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
