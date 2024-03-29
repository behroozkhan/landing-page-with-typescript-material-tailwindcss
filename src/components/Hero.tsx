import { Button } from "@mui/material";
import HeroImg from "../assets/Group.svg"
// import bgVectorImg from "../assets/Path.svg"

const Hero = () => {
    return (
        <div className="flex w-100 h-[91vh] items-center">
            {/* <div className="flex ">
          <div className="bg-red-400 w-[700px] h-[340px] flex flex-col p-5 ml-56">
                <h2>
                    Introduce Your Product Quickly & Effectively
                </h2>
                <div className="mt-10">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
                <div className="space-x-10 mt-10">
                <Button variant="contained" color={"success"} className="btn primiary w-[150px] h-[40px]">UI Kit</Button>
                <Button variant="contained" className="w-[150px] h-[40px]">Get In Touch</Button>
            </div>
            </div>
            <div className="flex justify-center items-center bg-orange-400">
                <h1>Hello World</h1>
            </div>
          </div> */}

            <div>

                <section className="min-h-[60vh] lg:min-h-[70vh] relative">
                    <div className="p-6">
                        <div className="flex">
                            <div
                                className="w-full h-[100%] lg:w-2/4 flex flex-col sm:space-y-20 space-y-6 mt-20 text-min-h-[60vh] lg:min-h-[70vh] relative">
                                <div className="p-10  text-[#091133">
                                    <h1 className="text-[1.8rem]  font-bold  font-sans leading-normal">
                                        Introduce Your Product <br></br> Quickly & Effectively
                                    </h1>
                                        <p  className="mt-10 text-[1.5rem]  leading-none text-[#505F98] ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                   
                                    <div className="space-x-10 mt-10 flex">
                                        <Button variant="contained" color={"success"} className="btn primiary w-[150px] h-[40px]">UI Kit</Button>
                                        <Button variant="contained" className="w-[150px] h-[40px]">Get In Touch</Button>
                                    </div>
                                </div>

                            </div>
                            <div
                                className="w-2/4 justify-end  fade-in hidden lg:flex">
                                <img
                                    src={HeroImg}
                                    alt="Hero-Image"
                                    // title="ai-robot"
                                    loading="lazy"
                                    // className=" min-h-[400px] min-w-[300px] flip duration-500"
                                    // width="800"
                                    // height="600"
                                    className="w-[600px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>




        </div>

    )
}

export default Hero;