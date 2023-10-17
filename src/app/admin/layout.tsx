import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <h1>
      {children}
      <footer>Admin Panel</footer>
    </h1>
  )
}
