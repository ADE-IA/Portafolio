import React, { useState, useEffect } from 'react';

export default function HackerTerminal() {
  const [text, setText] = useState('');
  const fullText = `> Iniciando sistema...\n> Cargando perfil...\n> Usuario: Abdel Duran\n> Rol: Ingeniero en Ciberseguridad\n> Estado: Activo\n> Sistemas: Operativos`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-green-500/30 w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center mb-2 border-b border-green-500/30 pb-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-green-500 text-sm ml-4">terminal@abdel-duran:~$</div>
      </div>
      <pre className="text-green-500 text-sm whitespace-pre-wrap">{text}</pre>
      <div className="animate-blink text-green-500 inline-block">_</div>
    </div>
  );
} 