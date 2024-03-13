

import Image from "next/image";
import NavBar from "@/components/NavBar";
import MainPage from "@/components/MainPage";

export default function Home() {
  return (
    <main className="flex h-screen flex-col w-full items-center justify-start">
        <div className={'flex flex-col 2xl:items-center w-full h-full'}>
            <MainPage/>
        </div>
      </main>
  );
}
