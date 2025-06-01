"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full border-b bg-background px-5">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Lua
        </Link>

        <div className="hidden md:flex w-full max-w-sm mx-4 space-x-4">
          <Input placeholder="Buscar..." />
          <Button>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button asChild>
            <Link href="/login">Entrar</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-5 pb-4 space-y-2">
            <div className="flex w-full space-x-4">
                <Input placeholder="Buscar..." />
                <Button>
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </div>
            <div className="flex flex-col gap-2 pt-2">
                <ModeToggle />
                <Button asChild variant="outline">
                    <Link href="/login">Entrar</Link>
                </Button>
            </div>
        </div>
      )}
    </header>
  )
}