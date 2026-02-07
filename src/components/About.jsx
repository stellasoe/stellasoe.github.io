import { FileDown } from 'lucide-react'
import MeLogo from '../assets/images/me_blinking.jpg'

const PROFILE_IMAGE_URL = MeLogo

const handleDownload = async () => {
  const response = await fetch('/uploads/Resume-SweSweMarSoe.pdf')
  const blob = await response.blob()

  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Resume_SweSweMarSoe.pdf'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

const About = () => (
  <section id="about" className="py-24 px-6 bg-slate-800/20">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col items-center gap-8">
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#ff9800] rounded-full blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white border-4 border-[#546e7a] shadow-2xl overflow-hidden flex items-center justify-center group-hover:border-[#ff9800] transition-colors duration-500">
            <img
              src={PROFILE_IMAGE_URL}
              alt="Profile"
              className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Resume Download Button */}
        <button
          onClick={handleDownload}
          className="flex items-center gap-3 bg-[#ff9800] hover:bg-[#f57c00] text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-900/20 group"
        >
          <FileDown size={22} className="group-hover:translate-y-0.5 transition-transform" />
          Download Resume
        </button>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-[#ff9800] italic text-4xl">01.</span> About Me
        </h2>
        <p className="text-slate-400 mb-6 leading-relaxed text-lg">
          I’m Swe Swe Mar Soe (you can call me Stella), a software engineer from Myanmar living in
          Japan since 2018.
          <br /> <br />
          I have 12+ years of experience as an engineer (14+ years in IT), with over 7 years working
          in Japan. My main expertise is in Ruby on Rails and PHP, and I’ve built and maintained B2B
          web systems such as order management, e-commerce, staffing, and reporting systems.
          <br />
          <br />
          Recently, I’ve been working with Rails, Django, and React, handling everything from API
          and UI design to batch processing and technical leadership. I focus on understanding
          business needs and building reliable, long-lasting systems.
        </p>
      </div>
    </div>
  </section>
)
export default About
