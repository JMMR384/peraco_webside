import { ProcedurePage } from "@/components/pages/procedure-page"

export default function Page({ params }: { params: { name: string } }) {
  return <ProcedurePage procedureName={params.name} />
}
