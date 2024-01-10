const Category = () => {
  return (
    <div className="relative">
      <h1 className="w-[371px] text-left text-[24px] font-semibold mt-[15px]">
        Category
      </h1>
      <div className="flex gap-[7px] absolute mt-[11px]">
        <button className="w-[80px] h-[40px] border-2 border-[#283048] rounded-[15px] hover:text-white hover:bg-[#283048] ">
          House
        </button>
        <button className="w-[80px] h-[40px] border-2 border-[#283048] rounded-[15px] hover:text-white hover:bg-[#283048]">
          Villa
        </button>
        <button className="w-[110px] h-[40px] border-2 border-[#283048] rounded-[15px] hover:text-white hover:bg-[#283048]">
          Apartements
        </button>
        <button className="w-[110px] h-[40px] border-2 border-[#283048] rounded-[15px] hover:text-white hover:bg-[#283048]">
          Penthouse
        </button>
      </div>
    </div>
  );
};

export default Category;
