'use client'

interface Project {
  id: number
  title: string
  description: string
  link: string
  tech: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce website with payment integration and admin dashboard.',
    link: '#',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    link: '#',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather app that displays real-time weather data and forecasts.',
    link: '#',
    tech: ['Next.js', 'API Integration', 'Charts'],
  },
  {
    id: 4,
    title: 'Social Media Feed',
    description: 'A social media platform with user authentication and post interactions.',
    link: '#',
    tech: ['Node.js', 'MongoDB', 'Socket.io'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary to-accent h-40 flex items-center justify-center">
              <span className="text-white text-4xl font-bold opacity-20">
                Project {project.id}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-accent text-primary px-3 py-1 rounded text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:text-accent transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
