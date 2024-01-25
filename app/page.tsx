import Image from "next/image";
import Topbar from "./components/Topbar";
import Backgroundiamge from "./components/Backgroundiamge";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#001118] max-w-[414px] text-white md:rounded-[50px] h-[896px] flex flex-col items-center overflow-hidden relative shadow-[10px_10px_10px_0px_rgba(20,20,20,0.50)]">
      <Topbar />
      <Backgroundiamge />
      <Footer />
    </main>
  );
}
