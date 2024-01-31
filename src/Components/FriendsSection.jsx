import { BiMessageAltMinus } from "react-icons/bi";

export default function FriendsSection({ data }) {
  return (
    <div className="flex flex-col gap-1.5 py-3.5">
      {data.map((f, i) => (
        <SingleFriend key={i} {...f} />
      ))}
    </div>
  );
}

const SingleFriend = ({ name, sub, lastOnline, img }) => {
  return (
    <div className="flex gap-3 items-center hover:bg-gray-100 p-1 rounded-xl transition-all ease-out cursor-pointer">
      <div className="max-w-[2.5rem]">
        <img
          src={img}
          alt={name}
          className="max-w-full aspect-square rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1">
        <span className="font-bold text-sm text-gray-700">{name}</span>
        <span className="text-xs text-gray-500">{sub}</span>
        <span className="text-xs text-gray-500">{lastOnline}</span>
      </div>

      <BiMessageAltMinus className="text-gray-800 text-2xl" />
    </div>
  );
};
