import { useAppState } from '@/context/appContext'
import clsx from 'clsx'
import { Button } from 'flowbite-react'
import React, { HtmlHTMLAttributes, useEffect } from 'react'
import { CiBellOn, CiUser } from 'react-icons/ci'

function TopNavbar({ toggleDrawer, className, ...props }: { toggleDrawer: () => void } & HtmlHTMLAttributes<HTMLElement>) {
  const { user } = useAppState();
 
  useEffect(() => {
  }, [user])
  
  return (
    <nav
      className={clsx(
        className,
        "h-20 transition-all duration-[0.3s] bg-white p-4",
      )}
      {...props}
    >
      <div className="flex items-center justify-between h-full">
        <Button
          pill
          className="lg:hidden !bg-primary text-secondary ml-2"
          onClick={() => toggleDrawer()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
            />
          </svg>
        </Button>
        <div className="hidden md:flex flex-col items-start mx-2">
          <p className="text-[#0D2646] font-bold text-base">
            Hi,&nbsp;{user?.name}
          </p>
          <p className="text-[#8C8FA5]">Track and monitoring your packages</p>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <button className="inline-flex items-center justify-center bg-[#FAFAFA] w-14 h-14 text-[#8C8FA5]">
            <CiBellOn className="w-6 h-6"/>
          </button>
          <button className="inline-flex items-center justify-center bg-[#FAFAFA] w-14 h-14 text-[#8C8FA5]">
            <CiUser className="w-6 h-6"/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar