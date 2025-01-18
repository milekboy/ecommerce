import { IoClose } from "react-icons/io5";
export default function Thanks(props) {
  return (
    <div className="bg-black  top-0 h-10 w-full flex justify-center items-center">
      <p className="text-white">Thanks for shopping here, you are amazing.🎉</p>
      <IoClose
        onClick={props.onClick}
        className="text-white end-0 font-bold absolute lg:me-16 me-4 cursor-pointer"
      />
    </div>
  );
}
