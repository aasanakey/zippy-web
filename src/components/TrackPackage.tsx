'use client';
import React, { useState } from 'react'
import { Spinner, TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from '@/context/appContext';
import { UPDATE_ORDER_SEARCH } from '@/utils/constants';
import toast from 'react-hot-toast';
import api from '@/utils/api';

function TrackPackage() {
  const [orderId, setOrderId] = useState("")
  const [searching, setsearching] = useState(false)
  const dispatch = useAppDispatch()

  const search = async () => {
      dispatch({type:UPDATE_ORDER_SEARCH,payload:null})
      try {
          setsearching(true)
          const response = await api.get(`api/get_order_details?orderId=${orderId}`)
          const data = response.data;
          if(data.responseCode === "004"){
              dispatch({type:UPDATE_ORDER_SEARCH,payload:data.data})
              toast.success(data.responseDesc);
          }else if(data.responseCode === "005"){
              toast.success(data.responseDesc);
          }
          console.log(data);
      } catch (error:any) {
          const response = error?.response
          if(response.status == 401){
              toast.error(response?.data?.message)
          }
      }finally{
          setsearching(false)
      }
  }
  return (
    <div className="flex flex-col gap-3 p-4 bg-white">
          <p className="text-xl font-bold">Track your package</p>
          <TextInput type="text" name="tracking_nuber"
           className="bg-[#FAFAFA] placeholder:text-[#8C8FA5]"
           placeholder="Enter tracking number" icon={FaSearch}
           onChange={(e) => setOrderId(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => search()}
             className="py-3 px-8 rounded-xl bg-primary text-white"
            >
              {searching ? <Spinner /> :<>Search package</>}
            </button>
            <button type="button" className="py-3 px-8 rounded-xl bg-transparent text-primary">
              Can't find
            </button>
          </div>
        </div>
  )
}

export default TrackPackage