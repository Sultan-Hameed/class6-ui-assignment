import Link from "next/link";
const gmcDetails = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center p-6">
        <h1 className="text-xl font-bold underline">
          GMC 2024 Price In Pakistan, Image, Reviews & Specs
        </h1>
        <div className="w-72 h-auto my-9">
          <img className="rounded-lg" src="/gmc.png" alt="Gmc Image" />
        </div>
        <ul className="flex gap-6 my-6">
          <li className="bg-white text-cyan-900 border-cyan-500 border-2 px-5 py-2 rounded-lg">
            Book a test drive
          </li>
          <li className="bg-white text-cyan-900 border-cyan-500 border-2 px-5 py-2 rounded-lg">
            Request bank finance
          </li>
          <li className="bg-white text-cyan-900 border-cyan-500 border-2 px-5 py-2 rounded-lg">
            Visit place
          </li>
          <li className="bg-white text-cyan-900 border-cyan-500 border-2 px-5 py-2 rounded-lg">
            Car inspection
          </li>
        </ul>
        <h3 className="text-xl font-semibold my-4">Vehicle Description</h3>
        <div className="flex flex-row items-center  gap-3 my-4" >
          <p>Numbers Of Doors: 4 </p> <p>Engine: 1800 CC</p>
          <p>Condition: 8.5/10</p> <p>Driven: 5,000 KM</p>
          <p>Suspension Type: Soft Suspension</p> <p>Avg: 13 KM Per/Ltr</p>
          <p>Transmission: Automatic</p> <p>Fuel Type: High Octane</p>
        </div>
        <p className="text-green-500 font-semibold  text-lg mb-6">
          PKR 100,000,000
        </p>
        <Link href="/detailsform">
        <button className="bg-cyan-500 font-semibold text-white px-5 py-2 rounded-lg">
          Make Payment
        </button>
        </Link>
      </div>
    </section>
  );
};
export default gmcDetails;
