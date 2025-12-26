"use client"

import { LogOut, Moon, Settings, User, Sun, ArrowBigRight, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { SidebarTrigger, useSidebar } from "./sidebar";
import Image from "next/image";

const NavLogo = () => {
  return (
    <Link href="/"><Image src="/logo.png" alt="logo" width={100} height={100} /></Link>
  )
}

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
]

const ThemeButton = () => {
   const {theme, setTheme} = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const UserMenu = () => {
  return (
            <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="TODO" />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2"/>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"/>
              Logout
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}

export function Navbar() {

 
  const {toggleSidebar} = useSidebar()
  return (
    <nav className="p-4 w-full flex items-center"> 
      {/* LEFT */}
     {/* <SidebarTrigger /> */}
      <Button variant="ghost" onClick={toggleSidebar}><ChevronRight /></Button> 
      {/* RIGHT */}
      
      <div className="flex w-full items-center justify-evenly">
        
        <NavLogo />

        {/* NAV ITEMS LOOP */}
        {navItems.map((item) => 
        <Link key={item.id} href={item.href}>{item.label}</Link>
        )}

        {/* THEME MENU */}
        <ThemeButton/>

        {/* USER MENU */}
        <UserMenu />

      </div>
    </nav>
  );
}
