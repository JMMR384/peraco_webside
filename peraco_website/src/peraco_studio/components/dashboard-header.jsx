"use client"

import { Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserNav } from "./user-nav"

export function DashboardHeader({ user, toggleSidebar }) {
  return (
    <header className="h-[60px] border-b bg-background flex items-center px-4 sticky top-0 z-10">
      <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={toggleSidebar}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>

      <div className="flex-1 flex items-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar..." className="pl-8 w-full bg-muted/40" />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <UserNav user={user} />
      </div>
    </header>
  )
}
