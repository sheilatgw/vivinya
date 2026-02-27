import React from 'react'
import { ThemeToggle } from './themeToggle'
import Navlink from './navlink'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col gap-2 py-6 px-5 md:px-10">
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-8">
                <h1 className="text-2xl font-semibold">Tutorial</h1>
                <p className="hidden md:block">testduluuu</p>
            </div>
            <div className="flex items-center gap-2">
                <Navlink/>
                <ThemeToggle/>
            </div>
        </div>
    </header>
  )
}

export default Navbar