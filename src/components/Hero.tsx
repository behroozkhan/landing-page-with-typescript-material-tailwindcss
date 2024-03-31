import { Button } from "@mui/material";
// import bgVectorImg from "../assets/Path.svg"
import heroObj from "../constans/heroObj";

const Hero = () => {
   
    
    return (
        <div className="flex w-100 h-[91vh] items-center">
                <section className=" min-h-[60vh] lg:min-h-[70vh] relative">
                    {
                        heroObj.map((item)=>(
                            <div className="" key={item.id}>
                        <div className="heroImg  flex">
                            <div
                                className="w-full h-[100%] lg:w-2/4  flex flex-col sm:space-y-20 space-y-6  text-min-h-[60vh] lg:min-h-[70vh] relative mt-10 ml-5">
                                <div className="p-10  text-[#091133">
                                    <h1 className="text-[1.8rem]  font-bold  font-sans leading-normal flex-wrap">
                                        {item.title}
                                    </h1>
                                        <p  className="mt-10 text-[1.5rem]  leading-none text-[#505F98] ">
                                            {item.para}
                                            </p>
                                   
                                    <div className="space-x-10 mt-10 flex">
                                        <Button variant="contained" color={"success"} className="btn primiary w-[150px] h-[40px]">UI Kit</Button>
                                        <Button variant="contained" className="w-[150px] h-[40px]">Get In Touch</Button>
                                    </div>
                                </div>

                            </div>
                            <div className="w-2/4 justify-end  fade-in lg:flex">
                                <img
                                    src={item.img}
                                    alt="Hero-Image"
                                    title="main-image"
                                    loading="lazy"
                                    className="w-[500px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </section>
        </div>

    )
}

export default Hero;