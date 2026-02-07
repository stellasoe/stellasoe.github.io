import { useState, useEffect } from 'react'
import MeLogo from '../assets/images/me.JPG'
import { X, Menu } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    setIsMenuOpen(false);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div
          onClick={() => scrollToSection('Home')}
          className="relative w-12 h-12 cursor-pointer group"
        >
          <div className="absolute -inset-1 bg-[#ff9800] rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative w-full h-full bg-white rounded-full overflow-hidden border-2 border-[#455a64] flex items-center justify-center">
            <img src={MeLogo} alt="Logo" className="w-full h-full object-cover scale-110" />
          </div>
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-slate-200 hover:text-[#ff9800] transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#37474f] border-t border-slate-700 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}
      >
        <ul className="flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-slate-200 hover:text-[#ff9800] transition-colors font-bold text-lg uppercase tracking-widest"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
