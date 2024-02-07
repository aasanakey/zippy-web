'use client';
import React, { useEffect, useState } from 'react'
import { Card, Table } from 'flowbite-react'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa';
import api from '@/utils/api';
import { useAppState } from '@/context/appContext';
import clsx from 'clsx';


function TrackingHistory() {
    const { searchResult } = useAppState()
    const [orders, setOrders] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const getOrders = async (pageSize = 1, page = currentPage) => {
            try {
                const response = await api.get(`api/get_orders?pageSize=${pageSize}&page=${page}`)
                if (response.status == 200) {
                    if (response?.data?.responseCode == "004") {
                        setCurrentPage(response?.data?.currentPage)
                        setTotalPages(response?.data?.totalPages)
                        setOrders(response?.data?.data)
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (searchResult) {
            //setOrders([{...searchResult}])
        } else {
            getOrders(10)
        }
    }, [searchResult])
    return (
        <div>
            <div className='flex items-center justify-between flex-wrap'>
                <p className="text-2xl font-bold">History</p>
                <Link href="#" className='text-primary inline-flex items-center'>
                    View all
                </Link>
            </div>
            <div className='flex h-full flex-col justify-center p-5 rounded-xl'>
                <div className='overflow-x-auto'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell className="font-semibold text-base text-[#8C8FA5] capitalize">Tracking number</Table.HeadCell>
                            <Table.HeadCell className="font-semibold text-base text-[#8C8FA5] capitalize">Route</Table.HeadCell>
                            <Table.HeadCell className="font-semibold text-base text-[#8C8FA5] capitalize">Status</Table.HeadCell>
                            <Table.HeadCell className="font-semibold text-base text-[#8C8FA5] capitalize">
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                           {Array.isArray(orders) && orders.length > 0 ? orders.map((item:any) => 
                           <Table.Row key={item.orderId} className="bg-w hite">
                                <Table.Cell className="whitespace-nowrap font-medium text-primary">
                                    {item?.orderId}
                                </Table.Cell>
                                <Table.Cell>
                                    {`${item.senderAddress} - ${item.receiverAddress}`}
                                </Table.Cell>
                                <Table.Cell>
                                    <span  className={clsx({
                                    "text-[#FFBB29]": item.status == "In Transit",
                                    "text-[#4CA7A8]": item.status == "Order Received",
                                    "text-red-600": item.status == "Cancelled"
                                })}>
                                    {item?.status}
                                </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link href="#" className="font-medium text-primary">
                                        <FaChevronRight />
                                    </Link>
                                </Table.Cell>
                            </Table.Row> )
                            :
                            <Table.Row>
                                <Table.Cell colSpan={3} className='text-center'>No orders found</Table.Cell>
                            </Table.Row>
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default TrackingHistory