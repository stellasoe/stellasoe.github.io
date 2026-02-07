import {ChevronDown } from 'lucide-react'

const Home = () => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
    <div className="max-w-4xl text-center">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#ff9800]/30 bg-[#ff9800]/10 text-[#ff9800] text-sm font-medium animate-fade-in">
        Available for new opportunities
      </div>
      <h3 className="text-5xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
        Hello,&nbsp;
        <span className="bg-gradient-to-r from-[#ff9800] to-orange-300 bg-clip-text text-transparent">
          I am Swe Swe Mar Soe (aka) Stella.
        </span>
      </h3>
      <p
        className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
        style={{ animationDelay: '0.2s' }}
      >
        I craft applications with Ruby on Railsーmy favorite frameworkーwhile always chasing new
        techical trends to push my skills forward.
      </p>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <button 
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center text-[#ff9800] hover:border-[#ff9800] transition-colors animate-bounce-slow"
        >
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  </section>
)

export default Home
