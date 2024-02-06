'use client';

import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="lg:grid grid-cols-2 p-4">
        <div className="hidden lg:flex h-full w-full">
          <Image src={"/images/login image.svg"}
           width={100} height={100} 
           className="w-full h-full object-fill"
           alt="image" loading="lazy"
          />
        </div>
        <div className="w-full h-full flex flex-col">
          <LoginForm className="h-full w-full"/>
        </div>
      </div>
    </main>
  );
}
