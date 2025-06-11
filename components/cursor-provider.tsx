"use client"
import { useState, useEffect } from "react"
import type React from "react"

import CustomCursor from "./custom-cursor"

export default function CursorProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && <CustomCursor />}
      {children}
    </>
  )
}
