import { WifiIcon, SignalIcon, Battery100Icon } from "@heroicons/react/24/solid"

interface StatusBarProps {
  time?: string
}

export function StatusBar({ time = "9:41" }: StatusBarProps) {
  return (
    <div className="absolute top-0 left-0 right-0 px-4 py-1 flex justify-between items-center text-[13px] font-medium">
      <div className="pt-1 pl-2">{time}</div>
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-gray-800 rounded-[24px] flex items-center justify-center">
        {/* Dynamic Island */}
        <div className="flex space-x-2">
        </div>
      </div>
      <div className="flex items-center space-x-1.5">
        <WifiIcon className="w-4 h-4" />
        <Battery100Icon className="w-6 h-4" />
      </div>
    </div>
  )
} 