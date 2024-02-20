import Category from "../components/Category";
import Firsthouse from "../components/Firsthouse";
import Fixedbar from "../components/Fixedbar";
import Icons from "../components/Icons";
import Searchbar from "../components/Searchbar";
import SecondTopbar from "../components/SecondTopbar";
import Secondhouse from "../components/Secondhouse";
import Topbar from "../components/Topbar";

const page = () => {
  return (
    <div className="bg-[#F8F8F8] pr-[14px] shrink-0 max-sm:w-full   text-black   h-[896px] flex flex-col items-center overflow-hidden relative ">
      <SecondTopbar />
      <Searchbar />
      <Icons />
      <Category />
      <Firsthouse />
      <Secondhouse />
      <Fixedbar />
    </div>
  );
};

export default page;
