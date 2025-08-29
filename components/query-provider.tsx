'use client'

import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

let queryClient: QueryClient | null = null

const getQueryClient = (): QueryClient => {
  if (queryClient) return queryClient
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
        gcTime: 5 * 60_000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  })
  return queryClient
}

export const QueryProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const client = React.useMemo(() => getQueryClient(), [])
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  )
}



