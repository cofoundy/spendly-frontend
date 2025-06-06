import React from "react";
import { MessageSquare } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
            <span className="gradient-text">¿Qué es Bilio?</span>
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Bilio es tu asistente financiero en WhatsApp: registra tus gastos, categorízalos automáticamente y recibe reportes y consejos personalizados.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-Bilio-cyan/20 to-Bilio-gold/20 rounded-full blur-3xl opacity-60 animate-pulse-soft"></div>
              <div className="relative card-premium rounded-3xl p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-Bilio-purple to-Bilio-blue flex items-center justify-center shadow-lg shadow-Bilio-purple/30">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white text-glow">WhatsApp</h3>
                    <p className="text-gray-400">Conversación con Bilio</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg rounded-tl-none border border-gray-700 shadow-lg">
                    <p className="text-gray-300">Hola, ¿cómo puedo ayudarte a administrar tus finanzas hoy?</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-Bilio-purple/80 to-Bilio-blue/80 p-3 rounded-lg rounded-tr-none ml-auto backdrop-blur-sm shadow-lg shadow-Bilio-purple/20">
                    <p className="text-white font-medium">Quiero registrar un gasto de $50 en restaurante</p>
                  </div>
                  
                  <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg rounded-tl-none border border-gray-700 shadow-lg">
                    <p className="text-gray-300">¡Listo! He registrado $50 en la categoría "Restaurantes".</p>
                    <p className="text-gray-500 text-sm mt-1">Este mes llevas $180 gastados en restaurantes.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-Bilio-purple/80 to-Bilio-blue/80 p-3 rounded-lg rounded-tr-none ml-auto backdrop-blur-sm shadow-lg shadow-Bilio-purple/20">
                    <p className="text-white font-medium">¿Cuál es mi categoría con más gastos?</p>
                  </div>
                  
                  <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg rounded-tl-none border border-gray-700 shadow-lg">
                    <p className="text-gray-300">Tu categoría con más gastos es "Transporte" con $250 este mes, seguido de "Restaurantes" con $180.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 max-w-lg">
            <h3 className="text-2xl font-bold mb-4 text-white text-glow">
              La forma más <span className="gradient-text">simple</span> de controlar tus finanzas
            </h3>
            <p className="text-gray-400 mb-6">
              Olvidate de descargar aplicaciones complicadas o recordar contraseñas. Con Bilio, usar la aplicación que ya usas todos los días: WhatsApp.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-Bilio-purple/20 flex items-center justify-center mt-1 border border-Bilio-purple/40 shadow-md shadow-Bilio-purple/20">
                  <span className="text-Bilio-purple text-sm font-bold">✓</span>
                </div>
                <span className="ml-3 text-gray-400">Registra gastos e ingresos con mensajes simples</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-Bilio-pink/20 flex items-center justify-center mt-1 border border-Bilio-pink/40 shadow-md shadow-Bilio-pink/20">
                  <span className="text-Bilio-pink text-sm font-bold">✓</span>
                </div>
                <span className="ml-3 text-gray-400">Recibe alertas cuando te acerques a tus límites de gasto</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-Bilio-blue/20 flex items-center justify-center mt-1 border border-Bilio-blue/40 shadow-md shadow-Bilio-blue/20">
                  <span className="text-Bilio-blue text-sm font-bold">✓</span>
                </div>
                <span className="ml-3 text-gray-400">Categorización automática con inteligencia artificial</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
