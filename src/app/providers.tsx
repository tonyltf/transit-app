"use client"

import { SessionProvider } from 'next-auth/react'
import { MantineProvider } from '@mantine/core'

type Props = { children: React.ReactNode }

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCss
      theme={{
        colorScheme: 'dark',
      }}
    >
      {children}
    </MantineProvider>
  )
}
