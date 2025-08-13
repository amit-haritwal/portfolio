"use client"

import { useEffect, useState } from "react"

/**
 * Hook to detect if the component has mounted on the client side
 * Helps prevent hydration mismatches between server and client
 */
export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

/**
 * Hook to detect browser extensions that might interfere with hydration
 * Common extensions: Grammarly, LastPass, AdBlock, etc.
 */
export function useBrowserExtensionDetection() {
  const [hasExtensions, setHasExtensions] = useState(false)
  const hasMounted = useHasMounted()

  useEffect(() => {
    if (!hasMounted) return

    // Check for common extension attributes
    const checkForExtensions = () => {
      const body = document.body
      const html = document.documentElement

      const extensionAttributes = [
        'data-new-gr-c-s-check-loaded', // Grammarly
        'data-gr-ext-installed', // Grammarly
        'data-lastpass-icon-root', // LastPass
        'data-1p-ignore', // 1Password
        'spellcheck', // Various spell checkers
      ]

      const hasExtensionAttributes = extensionAttributes.some(
        attr => body.hasAttribute(attr) || html.hasAttribute(attr)
      )

      setHasExtensions(hasExtensionAttributes)
    }

    // Check immediately
    checkForExtensions()

    // Check again after a short delay to catch lazy-loaded extensions
    const timeout = setTimeout(checkForExtensions, 1000)

    return () => clearTimeout(timeout)
  }, [hasMounted])

  return { hasExtensions, hasMounted }
}
