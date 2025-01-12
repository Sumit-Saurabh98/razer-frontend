'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ShoppingCart, User, Box, LogOut, LogIn } from "lucide-react"
import { useUserStore } from "@/store/useUserStore"

interface MenuItem {
  label: string
  icon: React.ElementType
  to?: string
  onClick?: () => void
}

const OnclickCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { user, logout } = useUserStore()

  const handleNavigation = (to?: string) => {
    if (to) {
      router.push(to)
      setIsOpen(false)
    }
  }

  const menuItems: MenuItem[] = [
    {
      label: "Cart",
      icon: ShoppingCart,
      to: "/cart",
    },
    {
      label: "Orders",
      icon: Box,
      to: "/orders",
    },
    {
      label: "Account",
      icon: User,
      to: "/account",
    },
    {
      label: user ? "Log out" : "Log in",
      icon: user ? LogOut : LogIn,
      onClick: () => {
        if (user) {
          logout()
        } else {
          handleNavigation("/login")
        }
        setIsOpen(false)
      },
    },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
        aria-label="Open menu"
      >
        <ShoppingCart className="h-6 w-6" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gray-900 text-white sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-xl text-gray-200 text-center py-4">
              Dashboard
            </DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick()
                    } else {
                      handleNavigation(item.to)
                    }
                  }}
                  className="w-full flex items-center gap-4 p-4 text-left hover:bg-gray-800 rounded-lg text-gray-200 transition-colors"
                >
                  <item.icon className="h-5 w-5 text-gray-400" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default OnclickCart