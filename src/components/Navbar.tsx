import { Button } from "@mui/material";
import MenuBar from "./MenuBar";
// import TemporaryDrawer from "./MenuBar";


const Navbar = () => {
  return (
    <nav className="w-[100%] flex justify-around">
        <div className="flex justify-between gap-40 items-center p-4">
            {/* <h1 className="ml-40"><img src="https://cdn.pixabay.com/photo/2018/03/18/18/55/cat-3237903_640.png" alt="" width={50} height={50}/></h1> */}
          <div className="flex items-center">  
            <img className="w-[100px]" src="https://cdn.pixabay.com/photo/2018/03/18/18/55/cat-3237903_640.png" alt=""  />
            <span className="text-[#000] font-extralight font-serif text-[2rem]">Geo</span>
          </div>
            <ul className="nav-item flex gap-28">
                <li className="text-[#000] font-extralight font-serif text-[1.4rem]" >Home</li>
                <li className="text-[#000] font-extralight font-serif text-[1.4rem]" >About</li>
                <li className="text-[#000] font-extralight font-serif text-[1.4rem]" >Contact</li>
            </ul>
            <div className="nav-item space-x-10 ml-10 flex">
                <Button variant="contained" color={"success"}    className="btn primiary w-[150px] h-[40px] font-semibold">UI Kit</Button>
                <Button variant="contained" className="w-[150px] h-[40px] font-semibold">Get In Touch</Button>
            </div>
                <div className="navbar-menu-container">
                    <MenuBar />
                </div>
        </div>
        {/* <div className="lg:hidden">
        <TemporaryDrawer />
      </div>  */}
    </nav>
  )
}

export default Navbar;