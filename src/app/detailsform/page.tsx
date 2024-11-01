import Link from "next/link"


const detailsForm = () => {
    return(
        <div>
            <h1 className="my-4 text-4xl font-semibold text-center uppercase">
                enter your details
            </h1>
            <div>
            <form className="mt-30 mb-10 flex gap-3 p-5 justify-center items-center flex-col border-4">
                <input type="text" className="p-2 rounded-2xl w-1/4 border border-red-800"
                 placeholder="Enter your Name" />

                <input type="email" className="p-2 rounded-2xl w-1/4 border border-red-800" 
                placeholder="Enter your Email" />

                <input type="number" className="p-2 rounded-2xl w-1/4 border border-red-800" 
                placeholder="Enter your Card Number" />

                <input type="text" className="p-2 rounded-2xl w-1/4 border border-red-800" 
                placeholder="Enter your Address" />
      
               <Link href="/thankyou">
                <button className=" py-3 px-7 rounded-lg 
                 bg-blue-500 text-white">Place your order</button>
                 </Link>
            </form>
            </div>
        
        </div>
    )
}
export default detailsForm