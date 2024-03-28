// import * as React from "react";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// // import { Menu, X } from "lucide-react";
// import { NavLink } from "react-router-dom";
// // import { menuItems } from "../constants/objData";

// const menuItems = [
//     {
//     id:1,
//     name: "Home",
//     href:"#"
// },
// {
//     id:2,
//     name: "Contact",
//     href:"#"
// },
// {
//     id:3,
//     name: "About",
//     href:"#"
// },
// ]

// export default function TemporaryDrawer() {
//   const [mobNav] = React.useState(menuItems);
//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const toggleDrawer = (anchor: string, open: boolean) => (event: { type: string; key: string; }) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   return (
//     <div>
//       <React.Fragment key={"right"}>
//         <Button onClick={toggleDrawer("right", true)}>
//           {/* <Menu stroke="white" size={32} /> */}
//         </Button>
//         <Drawer
//           anchor={"right"}
//           open={state["right"]}
//           onClose={toggleDrawer("right", false)}
//         >
//           <div
//             style={{
//               width: "80vw",
//               maxWidth: "400px",
//               height: "100%",
//               backgroundColor: "#060B13",
//             }}
//           >
//             <div
//               onClick={toggleDrawer("right", false)}
//               className="p-5 hover:cursor-pointer"
//             >
//               {/* <X stroke="white" /> */}
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: "5rem",
//                 gap: 50,
//               }}
//             >
//               {mobNav.map((item) => (
//                 <NavLink
//                   key={item.id}
//                   to={item.href}
//                   onClick={toggleDrawer("right", false)}
//                   style={{
//                     textDecoration: "none",
//                     border: "none",
//                     outline: "none",
//                   }}
//                   className={({ isActive }) =>
//                     isActive ||
//                     window.location.pathname.split("/")[1] ==
//                       item.name.toLowerCase()
//                       ? "text-xl uppercase font-normal hover:font-medium hover:opacity-70 font-sans flex items-center text-[var(--main)]"
//                       : "text-xl uppercase font-normal hover:font-medium hover:opacity-70 font-sans flex items-center text-white"
//                   }
//                 >
//                   {item.name}{" "}
//                 </NavLink>
//               ))}
//             </div>
//           </div>
//         </Drawer>
//       </React.Fragment>
//     </div>
//   );
// }