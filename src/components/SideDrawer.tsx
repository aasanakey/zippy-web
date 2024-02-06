import clsx from 'clsx';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaCog } from 'react-icons/fa';
import { RiHome5Line } from 'react-icons/ri';
import { SlLogout } from 'react-icons/sl';
import { TbReceipt } from 'react-icons/tb';

function SideDrawer({ isDrawerOpen, toggleDrawer }: { isDrawerOpen: boolean, toggleDrawer: () => void }) {
    const pathname = usePathname()
    return (
        <>
            <div onClick={() => toggleDrawer()} className={clsx({ "hidden": !isDrawerOpen }, "fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden")}></div>
            <nav className={clsx(
                {
                    "translate-x-0 ease-out": isDrawerOpen,
                    "-translate-x-full ease-in": !isDrawerOpen,
                },
                "fixed inset-y-0 left-0 z-30 w--[268px] overflow-y-auto transition duration-300",
                "transform bg-white lg:translate-x-0 lg:static lg:inset-0",
                "lg:max-h-screen overflow-y-auto w-[275px] max-w-[275px]",
                "scrollbar-thin scrollbar-track-secondary scrollbar-thumb-primary "
            )}>
                <div className="w-full h-20 flex items-center justify-between gap-2 p-4">
                    <Image src={"/images/logo.svg"} width="100" height={"100"} alt={"prodigee-logo"} loading="lazy" />
                    <Button size={"small"}
                        className={clsx(
                            "!bg-transparent text-primary item-end",
                            { "hidden ": !isDrawerOpen }
                        )}
                        onClick={() => toggleDrawer()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m13.3 17.3l-4.6-4.6q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L10.8 12l3.9 3.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z" />
                        </svg>
                    </Button>
                </div>
                <div className="h-4/5 flex flex-col justify-between py-2.5 overflow-y-auto px-4">
                    <ul className="space-y-2">
                        <li className={clsx(
                            "text-center",
                            {
                                "rounded-lg bg-secondary text-primary": pathname == '/dashboard',
                                "text-[#8C8FA5]": pathname != '/dashboard',
                            },
                        )}>
                            <Link
                                href={'/dashboard'}
                                className={clsx(
                                    "flex items-center gap-3 p-2",
                                )}>
                                <RiHome5Line />
                                Dashboard
                            </Link>
                        </li>
                        <li className={clsx(
                            "text-center",
                            {
                                "rounded-lg bg-secondary text-primary": pathname == '/package',
                                "text-[#8C8FA5]": pathname != '/package',
                            },
                        )}>
                            <Link
                                href={'/package'}
                                className={clsx(
                                    "flex items-center gap-3 p-2",
                                )}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="currentColor">
                                    <path d="M20.3799 21.8651C20.1799 21.8651 19.9899 21.7851 19.8499 21.6451L13.4699 15.2651C13.1799 14.9751 13.1799 14.4951 13.4699 14.2051L21.2 6.47512C21.39 6.28512 21.6799 6.21512 21.9399 6.28512C22.1999 6.36512 22.3999 6.57512 22.4599 6.83512C22.6499 7.68512 22.7499 8.63511 22.7499 9.73511V15.7351C22.7499 18.5051 22.1699 20.3751 20.9099 21.6451C20.7699 21.7851 20.5599 21.8151 20.3799 21.8651ZM15.0599 14.7351L20.3199 19.9951C20.9499 19.0251 21.2499 17.6451 21.2499 15.7351V9.73511C21.2499 9.32511 21.2399 8.94512 21.2099 8.58512L15.0599 14.7351Z" fill="currentColor" />
                                    <path d="M6.26999 23.2151C6.20999 23.2151 6.16001 23.2051 6.10001 23.1951C2.79001 22.4351 1.25 20.0651 1.25 15.7351V9.73511C1.25 4.30511 3.57 1.98511 9 1.98511H15C19.33 1.98511 21.7 3.52511 22.46 6.83511C22.52 7.08511 22.44 7.35511 22.26 7.53511L6.79999 22.9951C6.65999 23.1351 6.46999 23.2151 6.26999 23.2151ZM9 3.48511C4.39 3.48511 2.75 5.12511 2.75 9.73511V15.7351C2.75 19.2051 3.71001 20.9451 6.04001 21.6351L20.89 6.78511C20.21 4.45511 18.46 3.4951 14.99 3.4951H9V3.48511Z" fill="currentColor" />
                                    <path d="M14.9999 23.4851H8.99989C7.89989 23.4851 6.95989 23.3951 6.09989 23.1951C5.82989 23.1351 5.61987 22.9351 5.54987 22.6751C5.46987 22.4151 5.54988 22.1351 5.73988 21.9351L13.4699 14.2051C13.7599 13.9151 14.2399 13.9151 14.5299 14.2051L20.9099 20.5851C21.0499 20.7251 21.1299 20.9151 21.1299 21.1151C21.1299 21.3151 21.0499 21.5051 20.9099 21.6451C19.6399 22.9051 17.7699 23.4851 14.9999 23.4851ZM7.84989 21.9451C8.20989 21.9751 8.58989 21.9851 8.99989 21.9851H14.9999C16.9199 21.9851 18.2899 21.6851 19.2599 21.0551L13.9999 15.7951L7.84989 21.9451Z" fill="currentColor" />
                                    <path d="M9.11994 14.0451C8.48994 14.0451 7.85993 13.8151 7.35993 13.3451C5.76993 11.8351 5.12996 10.1751 5.50996 8.5551C5.88996 6.8951 7.33994 5.77509 9.11994 5.77509C10.8999 5.77509 12.35 6.8951 12.73 8.5551C13.1 10.1851 12.4599 11.8351 10.8699 13.3451C10.3799 13.8051 9.74994 14.0451 9.11994 14.0451ZM6.96995 8.88509C6.64995 10.2451 7.56994 11.4651 8.39994 12.2551C8.80994 12.6451 9.43994 12.6451 9.83994 12.2551C10.6599 11.4751 11.5799 10.2551 11.2699 8.88509C10.9999 7.69509 9.93994 7.26509 9.11994 7.26509C8.29994 7.26509 7.24995 7.69509 6.96995 8.88509Z" fill="currentColor" />
                                    <path d="M9.1499 10.2251C8.5999 10.2251 8.1499 9.7751 8.1499 9.2251C8.1499 8.6751 8.5899 8.2251 9.1499 8.2251H9.15991C9.70991 8.2251 10.1599 8.6751 10.1599 9.2251C10.1599 9.7751 9.6999 10.2251 9.1499 10.2251Z" fill="currentColor" />
                                </svg>
                                Package tracking
                            </Link>
                        </li>
                        <li className={clsx(
                            "text-center",
                            {
                                "rounded-lg bg-secondary text-primary": pathname == '/transaction',
                                "text-[#8C8FA5]": pathname != '/transaction',
                            },
                        )}>
                            <Link
                                href={'#'}
                                className={clsx(
                                    "flex items-center gap-3 p-2",
                                )}>
                                <TbReceipt />
                                My transaction
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <p className="text-[#D9D9D9]">System</p>
                        <ul className="space-y-2">

                            <li className={clsx(
                                "text-center",
                                {
                                    "rounded-lg bg-secondary text-primary": pathname == "/setting",
                                    "text-[#0D2646]": pathname != "/setting"
                                },
                            )}>
                                <Link
                                    href="/setting"
                                    className={clsx("flex items-center gap-3 !p-2 !mb-0")}>
                                    <FaCog />
                                    Setting
                                </Link>
                            </li>
                            <li className="text-red-500 text-center">
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 !bg-transparent !p-2 !mb-0"
                                    onClick={(e) => { e.preventDefault(); }}>
                                    <SlLogout/>
                                    Logout account
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SideDrawer