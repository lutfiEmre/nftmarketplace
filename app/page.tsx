

import Image from "next/image";
import {useState} from "react";
import NavBar from "@/components/NavBar";
import MainPage from "@/components/MainPage";

export default function Home() {
  return (
    <main className="flex h-screen flex-col w-full items-center justify-start">
        <div className={'flex flex-col lg:px-[50px] xl:px-[100px] px-[100px] 2xl:px-[120px] w-full h-full'}>
            <MainPage/>
        </div>
      </main>
  );
}
