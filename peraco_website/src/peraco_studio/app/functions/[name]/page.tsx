import { FunctionPage } from "@/components/pages/function-page"

export default function Page({ params }: { params: { name: string } }) {
  return <FunctionPage functionName={params.name} />
}
