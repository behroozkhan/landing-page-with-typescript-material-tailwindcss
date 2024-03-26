import { Button } from "@mui/material";


const Navbar = () => {
  return (
    <div className=" bg-red-50">
        <div className="flex justify-around items-center">
            <div>
                <h1>Logo</h1>
            </div>
            <ul className="flex gap-14">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="space-x-10">
                <Button variant="contained"  className="btn primiary">UI Kit</Button>
                <button className="btn secondary">Get In Touch</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;