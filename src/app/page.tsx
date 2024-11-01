import HeroSec from "./components/HeroSec";
import FeaturingSec from "./components/FeaturingSec";
export default function Home() {
  return (
   <div className="bg-zinc-100 h-full flex flex-col justify-center items-center">
    <HeroSec/>
    
    <FeaturingSec/>
   </div>
  );
}
