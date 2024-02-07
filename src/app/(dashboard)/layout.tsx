'use client';
import { Poppins } from "next/font/google";
import "../globals.css";
import SideDrawer from "@/components/SideDrawer";
import TopNavbar from "@/components/TopNavbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppState } from "@/context/appContext";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const [isOpen, setIsOpen] = useState(false)
    const {isAuthenticated } = useAppState();
    const router = useRouter();

    useEffect(() => {
      if(!isAuthenticated){
        router.push('/')
      }
    }, [isAuthenticated])
    
    return (

        <div className="flex min-h-screen">
            <SideDrawer isDrawerOpen={isOpen} toggleDrawer={() => setIsOpen(!isOpen)} />
            <div className="flex flex-col min-h-screen flex-1 bg-[#FAFAFA]">
                <TopNavbar toggleDrawer={() => setIsOpen(!isOpen)} />
                {children}
            </div>
        </div>
    )
}
