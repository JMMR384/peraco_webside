export function CompanyLogo({ collapsed }) {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-md bg-[#16502D] flex items-center justify-center text-white font-bold">C</div>
      {!collapsed && <span className="ml-2 font-bold text-[#16502D]">Corporativo</span>}
    </div>
  )
}
