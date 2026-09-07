'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white text-center py-6 mt-12">
      <div className="max-w-6xl mx-auto px-8">
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
