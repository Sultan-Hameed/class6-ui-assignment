import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between bg-gradient-to-t from-cyan-500 via-cyan-700 to-cyan-900 text-white  w-full h-auto text-lg py-5 px-11 font-semibold">
        <div>
          <p>Copyright ©2024 Privacy Policy Terms of Use search!</p>
        </div>

        <div>
         <h4><Link href="https://www.linkedin.com/in/sultan-hameed-597423321">Made by Sultan Hameed</Link></h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

