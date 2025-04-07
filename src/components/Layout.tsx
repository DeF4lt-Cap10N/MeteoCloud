import Header from "@/components/header"
import type { PropsWithChildren } from "react"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br  from-background to-muted">
      <header>
        <Header></Header>
      </header>
      <main className="min-h-screen container mx-auto px-4 py-8 mt-20">
        {children}
        middle
      </main>
      <footer className="border-t backdrop-blur py-12 bg-background/95 rounded-3xl">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Made with 💖 by Captain</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout