import Image from "next/image";
import DarkMode from "./components/DarkMode/DarkMode";

export default function Home() {
  return (
    <div className="flex justify-center mt-[300px]">
         <DarkMode />
    </div>
  );
}
