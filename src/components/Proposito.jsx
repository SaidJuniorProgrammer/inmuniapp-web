import React from 'react';
import { 
  Users, 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Database, 
  CheckCircle2,
  Activity
} from 'lucide-react';

export default function Proposito() {
  return (
    <section id="proposito" className="bg-white/5 backdrop-blur-lg border-y border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO DEL PROPÓSITO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/15 border border-sky-300/30 text-sky-200 text-xs font-semibold tracking-wide uppercase mb-4">
            <Activity className="w-4 h-4 text-sky-300" /> Estrategia Dual en Atención Primaria
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
            Nuestro <span className="text-sky-300">Propósito</span>
          </h2>
          <p className="text-sky-100/90 text-base md:text-lg leading-relaxed">
            <strong>InmuniApp</strong> es una plataforma de salud digital diseñada para proteger y acompañar la salud de la infancia. Nace como un puente de conexión entre la comunidad y los profesionales de la salud a través de una estrategia dual:
          </p>
        </div>

        {/* ESTRATEGIA DUAL: COMUNIDAD (WEB) + PERSONAL DE SALUD (APP MÓVIL) */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* PILAR 1: COMUNIDAD Y PADRES DE FAMILIA (ESTA WEB) */}
          <div className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-400/20 border border-sky-300/30 flex items-center justify-center">
                  <Users className="w-7 h-7 text-sky-300" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 border border-sky-300/30">
                  Portal Web Informativo
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Para la Comunidad y Padres de Familia
              </h3>
              <p className="text-sky-100/85 leading-relaxed text-sm md:text-base mb-6">
                Un espacio web informativo donde consultar de forma sencilla el Esquema Nacional de Vacunación, entender la función de cada vacuna, resolver mitos y conocer los cuidados requeridos antes y después de cada dosis.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-sky-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Consulta por edades clara</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Educación sin tecnicismos</span>
              </div>
            </div>
          </div>

          {/* PILAR 2: PERSONAL DE SALUD (REFERENCIA A LA APP MÓVIL CREADA) */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0b253c]/90 via-[#133b61]/80 to-[#0f3456]/90 border border-cyan-300/30 backdrop-blur-xl flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 border border-cyan-300/30 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-cyan-300" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-300/40">
                  Ecosistema App Móvil Clínica
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Para el Personal de Salud <span className="text-sm font-normal text-sky-300">(App Móvil)</span>
              </h3>
              <p className="text-sky-100/85 leading-relaxed text-sm md:text-base mb-6">
                Como parte del proyecto se desarrolló una <strong>aplicación móvil de soporte a la decisión clínica</strong> rápida y liviana que, mediante un algoritmo inteligente de semaforización lógica y visual, permite verificar las vacunas correspondientes a la edad del niño e identificar dosis y refuerzos pendientes en <strong>menos de 30 segundos</strong> durante la consulta.
              </p>
            </div>

            {/* DEMOSTRACIÓN VISUAL DEL SEMÁFORO DE LA APP */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between text-xs text-sky-200 mb-3">
                <span className="font-semibold uppercase tracking-wider">Sistema de Semaforización en la App:</span>
                <span className="inline-flex items-center gap-1 text-cyan-300 font-bold">
                  <Clock className="w-3.5 h-3.5" /> &lt; 30 seg en consulta
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-200">
                  🟢 Verde
                  <span className="block text-[10px] font-normal text-emerald-100/80 mt-0.5">Al día / Aplicable</span>
                </div>
                <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-200">
                  🟡 Amarillo
                  <span className="block text-[10px] font-normal text-amber-100/80 mt-0.5">Próxima / Precaución</span>
                </div>
                <div className="p-2 rounded-xl bg-rose-500/15 border border-rose-400/30 text-rose-200">
                  🔴 Rojo
                  <span className="block text-[10px] font-normal text-rose-100/80 mt-0.5">Atrasada / Pendiente</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* TARJETA DESTACADA: ¿REEMPLAZA EL PRASS DEL MSP? (VALOR DIFERENCIAL) */}
        <div className="p-7 md:p-8 rounded-3xl bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-sky-500/15 border border-sky-300/30 backdrop-blur-xl">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-300/30 mb-3">
                <ShieldCheck className="w-4 h-4 text-amber-300" /> Valor Diferencial y Ética Digital
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                ¿InmuniApp reemplaza el PRASS del MSP?
              </h3>
            </div>

            <div className="md:col-span-8 space-y-3 text-sm md:text-base text-sky-100/90 leading-relaxed border-t md:border-t-0 md:border-l border-white/15 pt-4 md:pt-0 md:pl-8">
              <p>
                <strong className="text-white text-lg">No.</strong> InmuniApp <strong>no duplica ni reemplaza</strong> los sistemas oficiales de registro como el <strong>PRASS del Ministerio de Salud Pública (MSP)</strong>; por el contrario, funciona como una <strong>herramienta ligera de apoyo a la decisión clínica</strong> en la Atención Primaria de la Salud.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-sky-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b253c]/60 border border-white/10">
                  <Lock className="w-4 h-4 text-cyan-300" /> Respeto estricto a la privacidad de datos sensibles
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b253c]/60 border border-white/10">
                  <Database className="w-4 h-4 text-cyan-300" /> Sin almacenamiento ni duplicación de historias clínicas
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}