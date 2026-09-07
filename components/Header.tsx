'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest">MyPortfolio</div>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="#about" className="hover:text-accent transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-accent transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-accent transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-primary flex flex-col gap-4 p-8">
            <li>
              <Link href="#about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
