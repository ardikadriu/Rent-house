import Link from "next/link";
const Footer = () => {
  return (
    <div className=" max-sm:flex max-sm:items-center max-sm:justify-center flex items-center justify-center ">
      <div className="bg-white text-black w-[615px] rounded-t-[600px] h-[236px] absolute bottom-[-41px] flex flex-col  items-center">
        <h2 className="font-poppins mt-[43px]">Reservation Now</h2>
        <Link href={"Newpage"}>
          <button className="bg-[#04242F] text-white px-[41px] py-3 rounded-[26px] mt-[24px] text-[24px] font-bold font-poppins">
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
