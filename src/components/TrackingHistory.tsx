'use client';
import React from 'react'
import { Card, Table } from 'flowbite-react'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa';


function TrackingHistory() {
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
                            <Table.Row className="bg-w hite">
                                <Table.Cell className="whitespace-nowrap font-medium text-primary">
                                    ZIPJF20243002
                                </Table.Cell>
                                <Table.Cell>
                                    Accra - Tema
                                </Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
                                <Table.Cell>
                                    <Link href="#" className="font-medium text-primary">
                                        <FaChevronRight />
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default TrackingHistory