import React from 'react';
import { HeartPulse, CheckCircle2 } from 'lucide-react';
import Proposito from './components/Proposito';
import EsquemaVacunacion from './components/EsquemaVacunacion';
import RecomendacionesPostVacuna from './components/RecomendacionesPostVacuna';
import MitosVerdades from './components/MitosVerdades';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b253c] via-[#16426b] to-[#0f3456] text-white font-sans selection:bg-sky-400 selection:text-[#0b253c]">
      
      {/* NAVBAR GLASSMORPHISM */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b253c]/75 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/Logo_Inmuniapp.png" 
              alt="InmuniApp Logo_Inmuniapp" 
              className="w-11 h-11 rounded-xl object-cover border border-white/30 shadow-md bg-white/10" 
            />
            <div>
              <span className="text-xl font-extrabold tracking-wider block leading-none">INMUNIAPP</span>
              <span className="text-[10px] tracking-widest text-sky-200 uppercase">Linking Immunization Pathways</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-sky-100">
            <a href="#inicio" className="hover:text-white transition">Inicio</a>
            <a href="#proposito" className="hover:text-white transition">Propósito y App</a>
            <a href="#esquema" className="hover:text-white transition">Esquema 2025</a>
            <a href="#cuidados" className="hover:text-white transition">Cuidados Post-Vacuna</a>
            <a href="#mitos" className="hover:text-white transition">Mitos y Verdades</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION CON LEMA Y DESCRIPCIÓN OFICIAL */}
      <section id="inicio" className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/15 border border-sky-300/30 text-sky-200 text-xs font-semibold tracking-wide uppercase">
            <HeartPulse className="w-4 h-4 text-sky-300" /> Atención Primaria de la Salud
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Conectando a la comunidad con una <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-cyan-300">infancia protegida</span>
          </h1>
          
          <p className="text-base md:text-lg text-sky-100/90 leading-relaxed">
            <strong>INMUNIAPP</strong> es una plataforma de apoyo a la gestión, educación comunitaria y verificación de esquemas de vacunación infantil. Acercamos información oficial a las familias y herramientas de soporte clínico a los profesionales de la salud.
          </p>
          
          <div className="flex flex-wrap gap-3.5 pt-2">
            <a href="#esquema" className="px-5 py-3.5 rounded-xl bg-white text-[#0f3456] font-bold shadow-lg hover:bg-sky-50 transition text-sm">
              Consultar Esquema 2025
            </a>
            <a href="#cuidados" className="px-5 py-3.5 rounded-xl bg-teal-400/20 border border-teal-300/35 text-teal-100 font-semibold hover:bg-teal-400/30 transition text-sm">
              Cuidados Post-Vacuna
            </a>
            <a href="#mitos" className="px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 font-semibold hover:bg-white/20 transition text-sm">
              5 Mitos y Verdades
            </a>
          </div>
        </div>

        {/* TARJETA CRISTAL CON TU Logo_Inmuniapp */}
        <div className="flex justify-center">
          <div className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/25 shadow-2xl max-w-sm w-full text-center">
            <img 
              src="/Logo_Inmuniapp.png" 
              alt="Logo_Inmuniapp Oficial InmuniApp" 
              className="w-full h-auto rounded-2xl shadow-lg border border-white/20"
            />
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-sky-200 font-medium tracking-widest uppercase">
              <CheckCircle2 className="w-4 h-4 text-sky-300" /> Protección • Trazabilidad • Cuidado
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: PROPÓSITO, ESTRATEGIA DUAL Y DIFERENCIAL PRASS */}
      <Proposito />

      {/* SECCIÓN 2: ESQUEMA NACIONAL DE VACUNACIÓN 2025 */}
      <EsquemaVacunacion />

      {/* SECCIÓN 3: RECOMENDACIONES DESPUÉS DE VACUNAR A UN BEBÉ */}
      <RecomendacionesPostVacuna />

      {/* SECCIÓN 4: 5 MITOS Y VERDADES SOBRE LA VACUNACIÓN INFANTIL */}
      <MitosVerdades />

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-sky-200/70 border-t border-white/10 bg-[#0b253c]/60">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p className="font-bold text-white tracking-wide">
            INMUNIAPP: Conectando a la comunidad con una infancia protegida
          </p>
          <p className="text-xs text-sky-200/60">
            Plataforma de apoyo a la educación familiar y verificación de esquemas de vacunación infantil en la Atención Primaria de la Salud.
          </p>
        </div>
      </footer>
    </div>
  );
}