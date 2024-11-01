import Link from "next/link";

const CarsCard = () => {
  return (
    <div className="flex  justify-evenly items-center ">
      <div className="w-52 h-56 my-3 mr-3 py-2  bg-white ">
        <div className="w-full h-auto">
          <Link href="/gmcdetails">
            <img
              src="/gmc.png"
              alt="Car Img"
              
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h5 className="pt-4 text-blue-800 font-semibold text-lg">GMC</h5>
          <p className="text-green-500 ">Usd 100,000,000</p>
          <p className="text-slate-500 pt-2 ">1558 Reviews </p>
        </div>
      </div>

      <div className="w-52 h-56 my-3 mr-3 py-2 bg-white ">
        <div className="w-full h-28">
          <Link href="/gwagondetails">
            <img
              src="/gwagon.png"
              alt="Car Img"
              
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h5 className="pt-4 text-blue-800 font-semibold text-lg">G Wagon</h5>
          <p className="text-green-500 ">Usd 100,000,000</p>
          <p className="text-slate-500 pt-2 ">1558 Reviews </p>
        </div>
      </div>

      <div className="w-52 h-56 my-3 mr-3 py-2  bg-white ">
        <div className="w-full h-28">
          <Link href="/tesladetails">
            <img
              src="/tesla.png"
              alt="Car Img"
              
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h5 className="pt-4 text-blue-800 font-semibold text-lg">Tesla</h5>
          <p className="text-green-500 ">Usd 100,000,000</p>
          <p className="text-slate-500 pt-2 ">1558 Reviews </p>
        </div>
      </div>

      <div className="w-52 h-56 my-3 mr-3 py-2  bg-white ">
        <div className="w-full h-28">
          <Link href="/corolladetails">
            <img
              src="/corolla.png"
              alt="Car Img"
              
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h5 className="pt-4 text-blue-800 font-semibold text-lg">Corolla</h5>
          <p className="text-green-500 ">Usd 50,00,000</p>
          <p className="text-slate-500 pt-2 ">1558 Reviews </p>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
