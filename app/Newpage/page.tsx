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
    <div className="bg-[#F8F8F8] shrink-0  text-black  h-[896px] flex flex-col items-center overflow-hidden relative shadow-[10px_10px_10px_0px_rgba(20,20,20,0.50)]">
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
