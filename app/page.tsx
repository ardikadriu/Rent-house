import Image from "next/image";
import Topbar from "./components/Topbar";
import Backgroundiamge from "./components/Backgroundiamge";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#001118] w-[414px] max-sm:w-full text-white md:rounded-[50px] h-[896px] flex flex-col items-center overflow-hidden relative ">
      <Topbar />
      <Backgroundiamge />
      <Footer />
    </main>
  );
}
