'use client'

import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you can add your form submission logic
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto py-20 px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
      
      {submitted && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center font-semibold">
          ✓ Message sent successfully! I'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-accent hover:text-primary transition"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
