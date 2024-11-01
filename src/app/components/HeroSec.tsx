import HeroCard1 from "./herocard1";
import HeroCard2 from "./herocard2";




function Hero() {
    return(
        <section className="flex h-auto relative mt-14 or w-[1020px] p-7 border-[2px] border-gray-300 m-[20px] bg-white">
            <HeroCard1 />
            <div className="w-32 mx-10 flex justify-center items-center">
                <div className="w-[1px] h-full bg-gray-300"></div>
            </div>
            <HeroCard2 />
            <h3 className="absolute text-black font-bold text-[24px] left-1/4 top-[-8%] bg-white px-4 opacity-80">Sell Your Car on PakWheels and Get the Best Price</h3>
        </section>
    )
}

export default Hero;