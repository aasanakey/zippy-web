'use client';
import { Poppins } from "next/font/google";
import "../globals.css";
import { ThemeModeScript } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';
import SideDrawer from "@/components/SideDrawer";
import TopNavbar from "@/components/TopNavbar";
import { useState } from "react";
import { AppProvider } from "@/context/appContext";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        
                <AppProvider>
                    <div className="flex min-h-screen">
                        <SideDrawer isDrawerOpen={isOpen} toggleDrawer={() => setIsOpen(!isOpen)} />
                        <div className="flex flex-col min-h-screen flex-1 bg-[#FAFAFA]">
                            <TopNavbar toggleDrawer={() => setIsOpen(!isOpen)} />
                            {children}
                        </div>
                    </div>
                    <Toaster />
                </AppProvider>
    )
}
