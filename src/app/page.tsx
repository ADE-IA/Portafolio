import React from 'react'

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Mi Portafolio de Ciberseguridad
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Especialista en seguridad informática y análisis de vulnerabilidades
          </p>
        </div>

        {/* Secciones Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Certificaciones</h2>
            <p className="text-gray-300">
              Certificaciones y formación especializada en ciberseguridad
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Proyectos</h2>
            <p className="text-gray-300">
              Proyectos y casos de estudio en seguridad informática
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Habilidades</h2>
            <p className="text-gray-300">
              Competencias técnicas y herramientas especializadas
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 