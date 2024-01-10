import Image from "next/image";
import Secondwoodenhouse from "@/public/house.png";

const Secondhouse = () => {
  return (
    <div className=" overflow-hidden">
      <Image
        className="rounded-[20px] mt-[19px]"
        src={Secondwoodenhouse}
        width={340.132}
        height={235}
        alt="hosue"
      />
    </div>
  );
};

export default Secondhouse;
