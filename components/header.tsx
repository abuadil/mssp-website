"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Technosive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-foreground/80 hover:text-foreground">Services</Link>
            <Link href="/solutions" className="text-foreground/80 hover:text-foreground">Solutions</Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground">About</Link>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link href="/services" className="block py-2 text-foreground/80 hover:text-foreground">Services</Link>
            <Link href="/solutions" className="block py-2 text-foreground/80 hover:text-foreground">Solutions</Link>
            <Link href="/about" className="block py-2 text-foreground/80 hover:text-foreground">About</Link>
            <Link href="/contact">
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}