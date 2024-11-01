const HeroCard1 = () => {

    const texts = ["Post your Ad for Free in 3 Easy Steps",
        "Get Genuine offers from Verified Buyers",
        "Sell your car Fast at the Best Price"]

    return (
        <section className="h-full w-full">
            <h3 className="text-[#233d7b] p-2 text-xl font-extrabold">Post your Ad on PakWheels</h3>
            <ul className="text-black p-2 text-sm">
                {texts.map((text, index) => (
                    <li key={index} className="py-1 flex gap-2">
                        <div className="h-4 w-4">
                            <img src="/tick.svg" alt="tick" className="h-full w-full" />
                        </div>
                        <p className="text-nowrap">{text}</p>
                    </li>
                ))}
            </ul>
            <div className="p-2">
                <button className="bg-red-700 opacity-90 p-[10px] text-lg w-48 rounded-md">Post Your Ad</button>
            </div>
        </section>
    )
}

export default HeroCard1;