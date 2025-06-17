"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Music",
    href: "#music",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Reviews",
    href: "#reviews",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "Book Now",
    href: "#booking",
    highlight: true,
  },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold text-white">
            DJ <span className="text-pink-400">BWElli</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      "px-3 py-2 rounded-md text-white hover:bg-white/10 flex items-center",
                      item.highlight && "bg-pink-500 hover:bg-pink-600",
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-white hover:bg-white/10 block",
                      item.highlight && "bg-pink-500 hover:bg-pink-600",
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={cn(
                      "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 backdrop-blur-md ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-right",
                      activeDropdown === item.name ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
                    )}
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-purple-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-lg p-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={cn(
                          "px-3 py-2 w-full text-left rounded-md text-white hover:bg-white/10 flex items-center justify-between",
                          item.highlight && "bg-pink-500 hover:bg-pink-600",
                        )}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 mt-1 space-y-1 border-l-2 border-purple-500">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded-md"
                              onClick={() => {
                                setActiveDropdown(null)
                                setIsOpen(false)
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 rounded-md text-white hover:bg-white/10 block",
                        item.highlight && "bg-pink-500 hover:bg-pink-600",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
