import { serviceObj } from '../constans/heroObj';
const Services = () => {
  return (
    <div className='mt-20'>
            {
                serviceObj.map((item)=>(
                    <section className="p-10" key={item.id}>
               <div className='service-container flex justify-center mt-10'> 
               <div className='w-[100%] flex justify-center'>
               <img src={item.img} loading='lazy' alt="aboutSide-img"  className='service-container-img object-contain'/>
               </div>
               <div className='flex flex-col justify-center items-center '>
               <h2 className="text-[2rem]  font-bold  font-sans leading-normal">
                    {item.title}
                </h2>
                <p className="service-container-para mt-6 text-[1.2rem]  leading-none text-[#505F98] w-[40%]">
                    {item.para}
                </p>
               </div>
               </div>
            </section>
                ))
            }
    </div>
  )
}

export default Services;