import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <h1>
      {children}
      <footer>Auth Layout</footer>
    </h1>
  )
}
