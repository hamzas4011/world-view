'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          WorldView
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0`}
        >
          <li>
            <Link href="/" className="hover:text-gray-300 block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/explore" className="hover:text-gray-300 block">
              Explore
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-gray-300 block">
              News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
