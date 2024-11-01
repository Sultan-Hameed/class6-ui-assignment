import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="px-11  bg-gradient-to-t from-cyan-500 via-cyan-700 to-cyan-900  text-white font-semibold h-auto">
          <div className="flex justify-between items-center   w-full  py-1 ">
            <div className="flex gap-3">
              <Image
                src="/mob_icon.png"
                width={20}
                height={20}
                alt="Logo Img"
              />
              <h5>Download App via SMS</h5>
            </div>
            <div className="flex gap-2 p">
              <h5 className="text-red-700">اردو</h5>
              <h5 className="border-x-2 px-1">Sign Up</h5>
              <h5>Sign In</h5>
            </div>
          </div>
          <hr />
<div className="flex justify-between items-center py-3">

          <Link href="/">
            <Image src="/Logo.png" width={200} height={200} alt="Logo Img" />
          </Link>

          <ul className="flex gap-6   ">
            <li className="px-3">
              <Link href="/">Used Cars</Link>
            </li>
            <li className="px-3">
              <Link href="/about">New Cars</Link>
            </li>
            <li className="px-3">
              <Link href="/contact">Bikes</Link>
            </li>
            <li className="px-3">
              <Link href="/login">Auto Store</Link>
            </li>
            <li className="px-3">
              <Link href="/login">Videos</Link>
            </li>{" "}
            <li className="px-3">
              <Link href="/login">Forums</Link>
            </li>{" "}
            <li className="px-3">
              <Link href="/login">Blog</Link>
            </li>{" "}
            <li className="px-3">
              <Link href="/login">More</Link>
            </li>
          </ul>
          <button className="bg-red-700 rounded-lg py-2 px-4 text-white">
            <p className="font-bold">Post an Ad</p>
          </button>
</div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
