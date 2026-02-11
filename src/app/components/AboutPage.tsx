import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import imgPhoto from "figma:asset/b3b8e05334419d62db96917a5fffa3ff2c99440e.png";
import imgPhotoMobile from "figma:asset/072c24cd64194f7619c4405b02212f7f66a2322c.png";

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export function AboutPage({ onNavigateHome, onNavigateContact }: AboutPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white h-screen relative overflow-hidden">
      {/* Header */}
      <motion.header 
        className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 md:py-6 font-light relative bg-white"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="text-sm md:text-lg text-black">elran levy portfolio</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 md:gap-8 lg:gap-10 text-sm md:text-base text-black">
          <button 
            onClick={onNavigateHome}
            className="hover:opacity-70 transition-opacity font-light"
          >
            main
          </button>
          <a href="#about" className="hover:opacity-70 transition-opacity font-normal underline underline-offset-4">
            about
          </a>
          <button 
            onClick={onNavigateContact}
            className="hover:opacity-70 transition-opacity font-light"
          >
            contact
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden relative text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col gap-8 text-[20px] text-center text-black">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateHome();
                }}
                className="hover:opacity-70 transition-opacity font-light"
              >
                main
              </button>
              <a 
                href="#about" 
                className="hover:opacity-70 transition-opacity font-normal underline underline-offset-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                about
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateContact();
                }}
                className="hover:opacity-70 transition-opacity font-light"
              >
                contact
              </button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16 gap-8 lg:gap-12">
        {/* Right Image */}
        <motion.div 
          className="w-[80%] max-w-xs lg:w-full lg:max-w-lg xl:max-w-xl shrink-0 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        >
          {/* Mobile Image */}
          <img 
            src={imgPhotoMobile} 
            alt="Elran Levy" 
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="lg:hidden w-full h-auto object-cover"
          />
          {/* Desktop/Tablet Image */}
          <img 
            src={imgPhoto} 
            alt="Elran Levy" 
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="hidden lg:block w-full h-auto object-cover"
          />
        </motion.div>

        {/* Left Content */}
        <motion.div 
          className="flex flex-col gap-4 md:gap-6 lg:gap-8 max-w-2xl w-full lg:pt-24 xl:pt-32 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-[36px] md:text-4xl lg:text-5xl xl:text-6xl text-text-primary font-extralight leading-tight tracking-[-0.72px]">
            12+ Years. Zero Fluff.
          </h1>
          
          <p className="text-text-primary font-extralight leading-relaxed text-[18px] md:text-[24px] tracking-[-0.72px]">
            Hi, I'm Elran, a Senior Product Designer. I specialize in simplifying complex domains without dumbing them down. Leveraging AI to accelerate my workflow, I prioritize real user behavior over assumptions and lean systems over decoration. I design for clarity, impact, and ROI - in that order.
          </p>
          
          <div className="mt-2 md:mt-4">
            <button className="bg-brand text-white px-8 py-3 md:px-10 md:py-4 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity">
              Contact me
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}