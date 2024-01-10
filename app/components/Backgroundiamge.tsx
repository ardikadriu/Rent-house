import backgroundImage from "@/public/Bulgari-resort-bali.png";
import Footer from "./Footer";

const Backgroundiamge = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        width: "414px",
        height: "515px",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
      className="mt-[191px]"
    >
      <h1 className=" max-w-[268px] text-[40px] font-bold font-poppins absolute top-[-44px] left-[53px]">
        Rent a House for you.
      </h1>
    </div>
  );
};

export default Backgroundiamge;
