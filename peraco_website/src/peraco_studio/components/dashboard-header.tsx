"use client"

import Link from "next/link"
import { Bell, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CompanyLogo } from "@/components/company-logo"
import { UserNav } from "@/components/user-nav"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <CompanyLogo className="h-6 w-6" />
          <span className="hidden md:inline-block">Company Name</span>
        </Link>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <form className="hidden md:flex">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-lg bg-background pl-8 md:w-80 lg:w-96"
            />
          </div>
        </form>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
          <span className="sr-only">Notifications</span>
        </Button>
        <UserNav />
      </div>
    </header>
  )
}
