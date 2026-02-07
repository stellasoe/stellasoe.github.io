import { Mail, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#37474f]/50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#455a64] border border-slate-500 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff9800]/10 text-[#ff9800] mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Start a Project?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-10 text-lg">
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-slate-200">
            <div className="p-6 rounded-2xl bg-[#37474f]/50 hover:bg-[#37474f] transition-colors border border-transparent hover:border-[#ff9800]/30 group">
              <Github className="mx-auto mb-4 group-hover:text-[#ff9800] transition-colors" />
              <p className="text-white font-bold">GitHub</p>
              <a
                href="https://github.com/stellasoe"
                target="new"
                className="text-[#ff9800] text-sm hover:underline"
              >
                @stellasoe
              </a>
            </div>
            <div className="p-6 rounded-2xl bg-[#37474f]/50 hover:bg-[#37474f] transition-colors border border-transparent hover:border-[#ff9800]/30 group">
              <Linkedin className="mx-auto mb-4 group-hover:text-[#ff9800] transition-colors" />
              <p className="text-white font-bold">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/sweswemarsoe/"
                target="new"
                className="text-[#ff9800] text-sm hover:underline"
              >
                /in/sweswemarsoe
              </a>
            </div>
            <div className="p-6 rounded-2xl bg-[#37474f]/50 hover:bg-[#37474f] transition-colors border border-transparent hover:border-[#ff9800]/30 group">
              <Mail className="mx-auto mb-4 group-hover:text-[#ff9800] transition-colors" />
              <p className="text-white font-bold">Mail</p>
              <a
                href="mailto:swesweucsy@gmail.com"
                className="text-[#ff9800] text-sm hover:underline"
              >
                Say Hello!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
