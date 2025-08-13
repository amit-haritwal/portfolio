"use client"

import { useEffect } from "react"

/**
 * Development utility to debug hydration issues
 * Only runs in development mode
 */
export function HydrationDebugger() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    // Log browser extension detection
    const logExtensions = () => {
      const body = document.body
      const html = document.documentElement
      
      console.group('🔍 Hydration Debugger')
      
      // Check for Grammarly
      if (body.hasAttribute('data-new-gr-c-s-check-loaded') || body.hasAttribute('data-gr-ext-installed')) {
        console.warn('📝 Grammarly extension detected - may cause hydration issues')
      }
      
      // Check for other common extensions
      const extensions = [
        { attr: 'data-lastpass-icon-root', name: 'LastPass' },
        { attr: 'data-1p-ignore', name: '1Password' },
        { attr: 'data-adblock', name: 'AdBlock' },
      ]
      
      extensions.forEach(({ attr, name }) => {
        if (body.hasAttribute(attr) || html.hasAttribute(attr)) {
          console.warn(`🛡️ ${name} extension detected`)
        }
      })
      
      // Log all data attributes
      const bodyAttrs = Array.from(body.attributes)
        .filter(attr => attr.name.startsWith('data-'))
        .map(attr => attr.name)
      
      const htmlAttrs = Array.from(html.attributes)
        .filter(attr => attr.name.startsWith('data-'))
        .map(attr => attr.name)
      
      if (bodyAttrs.length > 0) {
        console.info('📋 Body data attributes:', bodyAttrs)
      }
      
      if (htmlAttrs.length > 0) {
        console.info('📋 HTML data attributes:', htmlAttrs)
      }
      
      console.groupEnd()
    }

    // Check immediately and after a delay
    logExtensions()
    setTimeout(logExtensions, 2000)
  }, [])

  return null
}

export default HydrationDebugger
