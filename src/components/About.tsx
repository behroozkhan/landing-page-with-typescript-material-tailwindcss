import { aboutObj } from '../constans/heroObj';


const About = () => {
    return (
        <div className="mt-20">
            <section className="p-10">
                {
                    aboutObj.map((item) => (
                        <div className="about-container flex max-w-[80%] mx-auto" key={item.id}>
                            <div className="flex flex-col mt-16">
                                <h2 className="about-container-head text-[2rem]  font-bold  font-sans leading-normal">
                                    {item.title}
                                </h2>
                                <p className="about-container-para mt-6 text-[1.2rem]  leading-none text-[#505F98] w-[50%]">
                                    {item.para}
                                </p>
                                <div className="about-container-content flex w-[40%] p-2 mt-2">
                                    <div className="flex flex-col mt-2 gap-1">
                                        <img src={item.imgStrong1} loading='lazy' alt="touch-icon" className='w-[70px]' />
                                        <strong className='text-[#091133] font-black'>{item.strongTittle1}</strong>
                                        <p className='text-[#5D6970]'>
                                            { item.strongPara1}                          </p>
                                    </div>
                                    <div className="flex flex-col mt-2 gap-1">
                                        <img src={item.imgStrong2} loading='lazy' alt="touch-icon" className='w-[70px]' />
                                        <strong className='text-[#091133] font-black'>{item.strongTittle2}</strong>
                                        <p className='text-[#5D6970] '>
                                            {item.strongPara2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-img flex">
                                <img src={item.img} loading='lazy' alt="aboutSide-img" className='' />
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default About;