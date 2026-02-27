"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
    {name: "about,", href:"#about"},
    {name: "works,", href:"#works"},
    {name: "contact", href:"#footer"}
]

function Navlink() {
    const pathName = usePathname();

    const navClass = (href:string) => cn("transition-all duration-1000 ease-in-out hover:line-through",
      pathName === href && "line-through")

  return (
        <nav className="flex items-center gap-1 md:gap-3">
            {navigation.map((item) => (
        <Link key={item.href} href={item.href} className={navClass(item.href)}>
          {item.name}
        </Link>
      ))}
        </nav>
  )
}

export default Navlink