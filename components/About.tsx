'use client'

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <p className="text-lg text-center text-gray-700 mb-6">
        I'm a passionate web developer with experience in building modern, responsive websites 
        and web applications. I love creating beautiful user interfaces and writing clean, 
        efficient code.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-primary mb-3">Frontend</h3>
          <p className="text-gray-600">React, Next.js, Tailwind CSS, TypeScript</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-primary mb-3">Backend</h3>
          <p className="text-gray-600">Node.js, Express, MongoDB, PostgreSQL</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-primary mb-3">Tools</h3>
          <p className="text-gray-600">Git, Docker, Vercel, AWS</p>
        </div>
      </div>
    </section>
  )
}
