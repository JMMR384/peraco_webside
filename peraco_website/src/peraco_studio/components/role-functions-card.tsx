import { Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface FunctionItem {
  name: string
  description: string
  params: string
}

interface RoleFunctionsCardProps {
  title: string
  procedures: FunctionItem[]
  functions: FunctionItem[]
}

export function RoleFunctionsCard({ title, procedures, functions }: RoleFunctionsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-anton text-xl text-[#16502D]">{title.toUpperCase()}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="procedures">
          <TabsList className="mb-4">
            <TabsTrigger value="procedures">Procedimientos</TabsTrigger>
            <TabsTrigger value="functions">Funciones</TabsTrigger>
          </TabsList>
          <TabsContent value="procedures">
            <div className="space-y-4">
              {procedures.map((proc) => (
                <div key={proc.name} className="rounded-md border p-3">
                  <div className="flex items-start gap-2">
                    <Code className="mt-0.5 h-4 w-4 text-[#1B8F31]" />
                    <div>
                      <div className="font-medium text-[#16502D]">
                        {proc.name}
                        {proc.params}
                      </div>
                      <div className="text-sm text-muted-foreground">{proc.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="functions">
            <div className="space-y-4">
              {functions.map((func) => (
                <div key={func.name} className="rounded-md border p-3">
                  <div className="flex items-start gap-2">
                    <Code className="mt-0.5 h-4 w-4 text-[#1B8F31]" />
                    <div>
                      <div className="font-medium text-[#16502D]">
                        {func.name}
                        {func.params}
                      </div>
                      <div className="text-sm text-muted-foreground">{func.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
