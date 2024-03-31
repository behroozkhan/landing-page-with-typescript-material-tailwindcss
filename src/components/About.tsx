import aboutTouchImg from '../assets/touch.svg';
import aboutSideImg from '../assets/sideImg.png';

const About = () => {
    return (
        <div className="mt-20">
            <section className="p-10">
               <div className="about-container flex max-w-[80%] mx-auto">
              <div className="flex flex-col mt-16">
              <h2 className="about-container-head text-[2rem]  font-bold  font-sans leading-normal">
                    Light, Fast & Powerful
                </h2>
                <p className="about-container-para mt-6 text-[1.2rem]  leading-none text-[#505F98] w-[50%]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. <br/><br/> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className="about-container-content flex w-[40%] p-2 mt-2">
                <div className="flex flex-col mt-2 gap-1">
                    <img src={aboutTouchImg} alt="touch-icon" className='w-[70px]' />
                    <strong className='text-[#091133] font-black'>Title Goes Here</strong>
                    <p className='text-[#5D6970]'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    </p>
                </div>
                <div className="flex flex-col mt-2 gap-1">
                    <img src={aboutTouchImg} alt="touch-icon" className='w-[70px]' />
                    <strong className='text-[#091133] font-black'>Title Goes Here</strong>
                    <p className='text-[#5D6970] '>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    </p>
                </div>
                </div>
              </div>
                <div className="about-img flex">
                    <img src={aboutSideImg} alt="aboutSide-img"  className=''/>
                </div>
               </div>
            </section>
        </div>
    )
}

export default About;