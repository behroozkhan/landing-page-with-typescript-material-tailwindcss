import aboutSideImg from '../assets/sideImg.png';
import ServiceSecond from '../assets/undraw.png';
import ServiceThird from '../assets/undraw1.png';

const Services = () => {
  return (
    <div className='mt-20'>
            <section className="p-10">
               <div className='service-container flex justify-center'> 
               <div className='w-[100%] flex justify-center'>
               <img src={aboutSideImg} alt="aboutSide-img"  className='service-container-img object-contain'/>
               </div>
               <div className='flex flex-col justify-center items-center '>
               <h2 className="text-[2rem]  font-bold  font-sans leading-normal">
                    Light, Fast & Powerful
                </h2>
                <p className="service-container-para mt-6 text-[1.2rem]  leading-none text-[#505F98] w-[40%]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. <br/><br/> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
               </div>
               </div>
               {/* Second Service  */}
               <div className='service-container flex justify-center mt-40'> 
               <div className='w-[100%] flex justify-center'>
               <img src={ServiceSecond} alt="aboutSide-img"  className='service-container-img object-contain'/>
               </div>
               <div className='flex flex-col justify-center items-center '>
               <h2 className="text-[2rem]  font-bold  font-sans leading-normal">
                    Light, Fast & Powerful
                </h2>
                <p className="service-container-para mt-6 text-[1.2rem]  leading-none text-[#505F98] w-[40%]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. <br/><br/> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
               </div>
               </div>

               {/* Third Service  */}
               <div className='service-container flex justify-center mt-40'> 
               <div className='w-[100%] flex justify-center'>
               <img src={ServiceThird} alt="aboutSide-img"  className='service-container-img object-contain'/>
               </div>
               <div className='flex flex-col justify-center items-center '>
               <h2 className="text-[2rem]  font-bold  font-sans leading-normal">
                    Light, Fast & Powerful
                </h2>
                <p className="service-container-para mt-6 text-[1.2rem]  leading-none text-[#505F98] w-[40%]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. <br/><br/> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
               </div>
               </div>
            </section>
    </div>
  )
}

export default Services;