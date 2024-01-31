import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  return (
    <div className="flex justify-between w-full flex-col-reverse xl:flex-row gap-5">
      <div className="flex flex-col">
        <span className="text-gray-700">Primary</span>
        <span className="font-bold text-gray-800 text-2xl">Dashboard</span>
      </div>

      <div className="flex gap-4 items-center">
        <label
          htmlFor=""
          className="flex gap-2 items-center px-4 py-2.5 rounded-md overflow-hidden bg-neutral-300/70 w-full xl:w-auto"
        >
          <FaMagnifyingGlass className="text-gray-500" />
          <input
            type="text"
            placeholder="Serach"
            className="bg-transparent focus:outline-none"
          />
        </label>
        <div className="max-w-[3.5rem]">
          <img
            src="https://wellgroomedgentleman.com/wp-content/uploads/2023/10/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg"
            alt="profile image"
            className="max w-full object-cover aspect-square rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
