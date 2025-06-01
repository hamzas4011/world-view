'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a')
      firstLink?.focus()
    }
  }, [isOpen])

  return (
    <nav className="bg-gray-800 text-white" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
          WorldView
        </Link>

        {/* Toggle Button */}
        <button
          ref={buttonRef}
          type="button"
          className="md:hidden text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="main-menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Menu */}
        <ul
          ref={menuRef}
          id="main-menu"
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0 bg-gray-800 md:bg-transparent absolute md:static left-0 right-0 top-16 md:top-auto z-50 p-4 md:p-0`}
        >
          {['/', '/explore', '/news'].map((href, i) => {
            const labels = ['Home', 'Explore', 'News']
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-gray-300 block px-2 py-2 rounded focus:bg-gray-700 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  {labels[i]}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
