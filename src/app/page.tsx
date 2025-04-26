import React from 'react'
import { FaShieldAlt, FaCode, FaCertificate } from 'react-icons/fa'

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header con efecto de cristal */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-cyan-400 font-bold text-xl">Portfolio</span>
            <div className="space-x-6">
              <a href="#certificaciones" className="text-gray-300 hover:text-cyan-400 transition-colors">Certificaciones</a>
              <a href="#proyectos" className="text-gray-300 hover:text-cyan-400 transition-colors">Proyectos</a>
              <a href="#habilidades" className="text-gray-300 hover:text-cyan-400 transition-colors">Habilidades</a>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-6">
        {/* Hero Section con animación suave */}
        <section className="py-20 text-center animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mi Portafolio de Ciberseguridad
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Especialista en seguridad informática y análisis de vulnerabilidades,
            comprometido con la protección digital y la innovación en ciberseguridad.
          </p>
        </section>

        {/* Secciones Principales con Cards mejoradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {/* Certificaciones */}
          <section id="certificaciones" className="group">
            <div className="h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 
                          shadow-lg hover:shadow-cyan-500/10 transition-all duration-300
                          hover:border-cyan-500/50">
              <div className="flex items-center mb-6">
                <FaCertificate className="text-4xl text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Certificaciones</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Formación especializada y certificaciones en ciberseguridad que avalan
                mi experiencia y conocimientos en el campo.
              </p>
              <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                Ver certificaciones
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </section>

          {/* Proyectos */}
          <section id="proyectos" className="group">
            <div className="h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 
                          shadow-lg hover:shadow-cyan-500/10 transition-all duration-300
                          hover:border-cyan-500/50">
              <div className="flex items-center mb-6">
                <FaCode className="text-4xl text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Proyectos</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Portafolio de proyectos y casos de estudio en seguridad informática,
                demostrando experiencia práctica y resultados.
              </p>
              <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                Ver proyectos
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </section>

          {/* Habilidades */}
          <section id="habilidades" className="group">
            <div className="h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 
                          shadow-lg hover:shadow-cyan-500/10 transition-all duration-300
                          hover:border-cyan-500/50">
              <div className="flex items-center mb-6">
                <FaShieldAlt className="text-4xl text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Habilidades</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Competencias técnicas y herramientas especializadas en ciberseguridad,
                incluyendo análisis de vulnerabilidades y ethical hacking.
              </p>
              <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                Ver habilidades
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 