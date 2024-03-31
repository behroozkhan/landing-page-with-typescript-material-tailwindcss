import { Button } from "@mui/material"

const Footer = () => {
    return (
        <div className="bg-[#e7ecff] p-10">
            <section >
                <div className="footerUl flex justify-around">
                    <p className="text-[#939EA4]">&copy;2023 YourCompany. All rights reserved.</p>
                    <h2 className="text-[#37447E]">Geo</h2>
                    <Button variant="contained" className="w-[180px] h-[40px]">Purchase Now</Button> 
                    </div>
                <hr className="hr border-cyan-950 w-[77%] mx-auto mt-10" />
               <div className="w-[78%] mx-auto">
               <div className="flex justify-between mt-10">
                    <ul className="footerUl flex gap-10 text-[#929ECC]">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className="vertical-line"></div>
                    <ul className="footerUl flex gap-2 justify-items-end text-[#929ECC]">
                        <li><a href="https://www.facebook.com"><span>Facebook</span></a></li>
                        <li><a href="https://www.linkedin.com"><span>LinkedIn</span></a></li>
                        <li><a href="https://www.twitter.com"><span>Twitter</span></a></li>
                        <li><a href="https://www.youtube.com"><span>Youtube</span></a></li>
                        <li><a href="https://www.instagram.com"><span>Instagram</span></a></li>
                    </ul>
                </div>
               </div>
            </section>
        </div>
    )
}

export default Footer