import { Building } from "lucide-react"

interface CompanyLogoProps {
  className?: string
}

export function CompanyLogo({ className }: CompanyLogoProps) {
  // Replace this with your actual company logo
  return <Building className={className} />
}
