import React from 'react'
import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";

function TrackPackage() {
  return (
    <div className="flex flex-col gap-3 p-4 bg-white">
          <p className="text-xl font-bold">Track your package</p>
          <TextInput type="text" name="tracking_nuber"
           className="bg-[#FAFAFA] placeholder:text-[#8C8FA5]"
           placeholder="Enter tracking number" icon={FaSearch}
          />
          <div className="flex flex-wrap gap-2">
            <button type="button" className="py-3 px-8 rounded-xl bg-primary text-white">
              Search package
            </button>
            <button type="button" className="py-3 px-8 rounded-xl bg-transparent text-primary">
              Can't find
            </button>
          </div>
        </div>
  )
}

export default TrackPackage