'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white py-20 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-accent">Your Name</span>
        </h1>
        <p className="text-2xl md:text-3xl mb-8 opacity-90">
          Web Developer & Designer
        </p>
        <Link
          href="#projects"
          className="inline-block bg-accent text-primary px-8 py-3 rounded font-bold text-lg hover:bg-white transition"
        >
          See my work
        </Link>
      </div>
    </section>
  )
}
