import { Button } from "@mui/material";

const Price = () => {
  return (
    <div className="price-container bg-[#f2f5ff] p-20 mt-10">
        <div className="curved-section" ></div>
        <section className="flex flex-col justify-center items-center mt-40">
            <div className="flex flex-col justify-center items-center">
                    <h2 className="price-container-head text-[2rem]  font-bold  font-sans leading-normal text-[#091133]">A Price To Suit Everyone</h2>
                    <p className="service-container-para mt-6 text-[1.2rem]  leading-none text-[#505F98] w-[40%]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
            </div>
            <div className="price-container-money flex flex-col mt-5 gap-2">
                <strong className="font-semibold text-[2rem] text-[#222F65]">
                $40
                </strong>
                <strong className="text-[#37447E]">UI Design Kit</strong>
            </div>
            <div className="price-container-money flex flex-col mt-10 gap-5">
                <em className="text-[#5D6970]">See, One price. Simple.</em>
                <Button variant="contained" className="w-[180px] h-[40px]">Purchase Now</Button>
            </div>
        </section>
    </div>
  )
}

export default Price;