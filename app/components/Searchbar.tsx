import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className="flex">
      <div className="w-[311px] bg-zinc-200 h-[50px] flex items-center rounded-[12px]">
        <IoIosSearch className="ml-[13px] hover:cursor-pointer" size="25px" />
        <input
          type="text"
          className="w-[311px] ml-[31px] h-[50px] bg-zinc-200 outline-0 font-poppins  text-black placeholder:text-black rounded-br-[12px] rounded-tr-[12px]"
          placeholder="Seach Now"
        />
      </div>
      <div className="border-[1px] w-[50px] border-solid h-[50px] flex justify-center items-center rounded-[15px] ml-[10px] hover:cursor-pointer">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            d="M9.56367 14.7134H3.80003C3.07057 14.7134 2.47842 15.2952 2.47842 16.0118C2.47842 16.7275 3.07057 17.3103 3.80003 17.3103H9.56367C10.2931 17.3103 10.8853 16.7275 10.8853 16.0118C10.8853 15.2952 10.2931 14.7134 9.56367 14.7134Z"
            fill="#1D4D4F"
          />
          <path
            opacity="0.8"
            d="M20.0088 6.31682C20.0088 5.6011 19.4166 5.01935 18.6881 5.01935H12.9245C12.195 5.01935 11.6029 5.6011 11.6029 6.31682C11.6029 7.03349 12.195 7.61525 12.9245 7.61525H18.6881C19.4166 7.61525 20.0088 7.03349 20.0088 6.31682Z"
            fill="#1D4D4F"
          />
          <path
            d="M8.50733 6.31679C8.50733 7.95298 7.15846 9.27915 5.49306 9.27915C3.82864 9.27915 2.47879 7.95298 2.47879 6.31679C2.47879 4.68155 3.82864 3.35538 5.49306 3.35538C7.15846 3.35538 8.50733 4.68155 8.50733 6.31679Z"
            fill="#55836F"
          />
          <path
            d="M20.0089 15.9766C20.0089 17.6118 18.66 18.938 16.9946 18.938C15.3302 18.938 13.9803 17.6118 13.9803 15.9766C13.9803 14.3404 15.3302 13.0142 16.9946 13.0142C18.66 13.0142 20.0089 14.3404 20.0089 15.9766Z"
            fill="#55836F"
          />
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
