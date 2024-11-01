// import Image from "next/image"
import CarsCard from "./CarsCard"

const FeaturingSec = () => {
    return (
<section className="px-56 h-full">
<div className="flex justify-between items-center py-5  ">
    <h3 className="font-bold text-lg">Featured New Cars</h3>
    <p className="text-sky-400 text-sm">View All New Cars</p>
</div>
<div className="border-neutral-400 border-b-2 " >
    <ul className="flex gap-10 text-lg ">
        <li className="font-semibold border-blue-800 border-b-4  pb-3">Popular</li>
        <li className="pb-3">Upcoming</li>
        <li className="pb-3">Newly Launched</li>
        <hr className="bg-slate-500"/>
        </ul>
</div>
<CarsCard/>
</section>
    )
}
export default FeaturingSec