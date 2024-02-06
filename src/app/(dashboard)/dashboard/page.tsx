import PackageTrackingHistory from "@/components/PackageTrackingHistory";
import TrackPackage from "@/components/TrackPackage";
import TrackingHistory from "@/components/TrackingHistory";

export default function Dashboard() {
  return (
    <div className="h-full flex flex-col p-3.5 md:grid grid-cols-12 flex-wrap gap-4">
      <div className="flex flex-col gap-3.5 col-span-8">
        <div className="flex flex-col md:grid grid-cols-2 gap-3">
          <TrackPackage />
          <div className="flex flex-col gap-3 bg-primary text-white rounded-xl p-4 w-full">
            <p className="text-2xl font-bold">Save up to 70%</p>
            <p className="text-base font-semibold">Use code <strong>ZIPPY01</strong> and save up to <strong>70%</strong> cost</p>
            <button className="items-center py-3 px-8 bg-[#5EB0B1] text-white text-base">Claim now</button>
          </div>
        </div>
        <TrackingHistory/>
      </div>
        <PackageTrackingHistory className="col-span-4"/>
    </div>
  )
}
