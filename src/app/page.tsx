import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaShieldAlt, FaCode, FaCertificate } from 'react-icons/fa'
import ParticlesBackground from '../components/ParticlesBackground'
import HackerTerminal from '../components/HackerTerminal'

export default function Home(): React.ReactElement {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      
      <main className="relative z-10">
        {/* Header con efecto glassmorphism */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-green-500/30">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl">./portfolio</span>
              <div className="space-x-6">
                <a href="#about" className="hover:text-green-400 transition-colors">Sobre mí</a>
                <a href="#certs" className="hover:text-green-400 transition-colors">Certificaciones</a>
                <a href="#contact" className="hover:text-green-400 transition-colors">Contacto</a>
              </div>
            </div>
          </nav>
        </header>

        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <HackerTerminal />
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://github.com/yourusername" className="text-3xl hover:text-green-400 transition-transform hover:scale-110">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-3xl hover:text-green-400 transition-transform hover:scale-110">
                <FaLinkedin />
              </a>
              <a href="mailto:your@email.com" className="text-3xl hover:text-green-400 transition-transform hover:scale-110">
                <FaEnvelope />
              </a>
            </div>

            {/* CV Download Button */}
            <button className="mt-8 px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all flex items-center gap-2 mx-auto">
              <FaFileDownload /> Descargar CV
            </button>
          </section>

          {/* About Section */}
          <section id="about" className="py-16">
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/30">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaShieldAlt /> Sobre Mí
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Soy un Ingeniero en Ciberseguridad especializado en pentesting y análisis de vulnerabilidades.
                Mi enfoque se centra en la seguridad ofensiva y la protección de infraestructuras críticas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-black/50 p-4 rounded-lg border border-green-500/20">
                  <h3 className="font-bold mb-2">Especialidades</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Pentesting Web</li>
                    <li>Análisis de Malware</li>
                    <li>Seguridad en Redes</li>
                    <li>Auditoría de Sistemas</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-green-500/20">
                  <h3 className="font-bold mb-2">Herramientas</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Kali Linux</li>
                    <li>Metasploit</li>
                    <li>Burp Suite</li>
                    <li>Wireshark</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certs" className="py-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <FaCertificate /> Certificaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ejemplo de certificación */}
              <div className="group">
                <div className="h-full bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/30 
                              hover:border-green-500/50 transition-all duration-300">
                  <img 
                    src="/cisco-intro-cybersecurity.png" 
                    alt="Certificación Cisco" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-bold mb-2">Introduction to Cybersecurity</h3>
                  <p className="text-gray-300 text-sm mb-4">Cisco Networking Academy</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">2024</span>
                    <a href="#" className="text-green-400 hover:text-green-300 text-sm">Ver credencial →</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 