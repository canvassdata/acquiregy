import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-background border-t border-border/40">
      <div className="container">
        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Acquiregy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

