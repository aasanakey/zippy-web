import clsx from 'clsx'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'
import { CgCloseO } from 'react-icons/cg'
import { CiShare1 } from 'react-icons/ci'

function PackageTrackingHistory({className,...props}:HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={clsx(className,"flex flex-col h-full flex-1")}>
            <div className='w-full flex items-center justify-between'>
                <p className="font-bold text-xl text-[#0D2646]">Package History</p>
                <CgCloseO className='text-[#8C8FA5]' />
            </div>
            <div className="flex flex-col gap-4 md:flex-row lg:flex-col">
                <div className="flex flex-col md:h-full">
                    <Image src={"/images/Group 237783.png"} width={100} height={100}
                        className='object-cover w-full md:h-5/6 md:w-auto'
                        alt='map' loading='lazy'
                    />
                    <div className='md:flex-1'>
                        <p className="text-base text-[#8C8FA5]">Tracking number </p>
                        <p className="text-xl text-primary">ZIPJF20243004</p>
                    </div>
                </div>
                <div className="flex flex-col xl:border-t-2 xl:border-t-[#E1E1E1] pt-4 md:pt-0 lg:pt-4  px-4">
                    <ol className="relative text-gray-500 border-s border-dashed border-gray-200 mb-2.5">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                            </span>
                            <h3 className="font-bold text-[#8C8FA5] leading-tight">Order Received</h3>
                            <p className="text-sm text-[#8C8FA5]">10:55 AM</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                            </span>
                            <h3 className="font-bold text-[#8C8FA5] leading-tight">Order Picked Up</h3>
                            <p className="text-sm text-[#8C8FA5]">11:15 AM @ Legon Hall, Legon</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            </span>
                            <h3 className="font-bold text-[#8C8FA5] leading-tight">Transit</h3>
                            <p className="text-sm text-[#8C8FA5]">11:35 Am</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            </span>
                            <h3 className="font-bold text-[#8C8FA5] leading-tight">Delivered</h3>
                            <p className="text-sm text-[#8C8FA5]">11:50 AM @ 335 Place, Dzorwulo</p>
                        </li>
                    </ol>
                    <button type='button' className="inline-flex items-center justify-center rounded-lg py-3 px-8 bg-primary text-white text-base">Print</button>
                    <button type='button' className='inline-flex items-center justify-center gap-2.5 text-primary my-4'>
                        <CiShare1 />
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PackageTrackingHistory