'use client'

/**
 * app/error.tsx
 * This is the error state for the app
 * No need to replace this unless the user requests it
 */

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  const handleRetry = () => {
    reset()
  }

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
    <div className="mx-auto w-full max-w-md rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <h1 className="text-xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        An unexpected error occurred. You can try again.
      </p>
      {error?.digest && (
        <p className="mt-2 text-xs text-muted-foreground/70" aria-label="error code">
          Error code: {error.digest}
        </p>
      )}
      <div className="mt-4 flex gap-2">
        <Button onClick={handleRetry} aria-label="Try again">Try again</Button>
        <Button variant="outline" onClick={() => window.location.reload()} aria-label="Reload page">Reload</Button>
      </div>
    </div>
    </div>
  )
}


