"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes";
import { GiSun, GiMoon } from "react-icons/gi";

export function ThemeToggle(){
    const {theme, setTheme} = useTheme();

  return (
    <Button variant="ghost" size="icon" className="rounded-full cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <GiSun className="absolute h-6 w-6 rotate-0 scale-100 transition-all duration-300 dark:rotate-90 dark:scale-0"></GiSun>
        <GiMoon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"></GiMoon>
    </Button>
  )
} 
