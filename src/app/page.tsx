import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-300 dark:bg-gray-800  flex flex-col justify-center items-center gap-7 p-4 w-screen overflow-hidden h-screen">
      <Image src={"/logo.png"} alt="" width={500} height={500} />

      <div className="flex flex-col gap-2  w-100 justify-center
      items-center">
        <Link href={"/login"}>
          <Button variant={"outline"} className=" text-white cursor-pointer min-w-32">Login</Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"outline"} className="text-white cursor-pointer min-w-32">DashBoard</Button>
        </Link>
      </div>
    </div>
  );
}
