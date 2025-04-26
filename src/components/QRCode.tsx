'use client';

import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function QRCodeComponent() {
  const [currentURL, setCurrentURL] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = typeof window !== 'undefined' ? window.location.origin : '';
    setCurrentURL(url);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentURL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar URL:', err);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-zinc-800/80 p-4 rounded-lg shadow-lg backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer group" onClick={handleCopy}>
      <div className="relative">
        <QRCodeSVG 
          value={currentURL}
          size={128}
          bgColor="#18181b"
          fgColor="#ffffff"
          level="H"
          includeMargin={true}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
          <p className="text-white text-sm">
            {copied ? '¡URL Copiada!' : 'Haz clic para copiar URL'}
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-300 mt-2 text-center font-medium">Escanea para visitar</p>
      <p className="text-xs text-gray-400 mt-1 text-center break-all">{currentURL}</p>
    </div>
  );
} 