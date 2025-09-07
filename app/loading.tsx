/**
 * app/loading.tsx
 * This is the loading state for the app
 * No need to replace this unless the user requests it
 */
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3 text-muted-foreground" role="status" aria-live="polite">
        <span className="size-3 rounded-full bg-foreground/20 animate-bounce [animation-delay:-.3s]" />
        <span className="size-3 rounded-full bg-foreground/20 animate-bounce [animation-delay:-.15s]" />
        <span className="size-3 rounded-full bg-foreground/20 animate-bounce" />
        <span className="sr-only">Loading</span>
      </div>
    </div>
  )
}


