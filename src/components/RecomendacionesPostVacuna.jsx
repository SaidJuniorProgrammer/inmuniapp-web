import React, { useState } from 'react';
import { 
  Heart, 
  Thermometer, 
  Moon, 
  AlertCircle, 
  PhoneCall, 
  Sparkles, 
  Baby, 
  Droplets, 
  Clock, 
  ShieldAlert,
  Image as ImageIcon,
  Download,
  X
} from 'lucide-react';

export default function RecomendacionesPostVacuna() {
  const [mostrarAfiche, setMostrarAfiche] = useState(false);

  const pasosCuidado = [
    {
      numero: '1',
      titulo: 'COMODIDAD Y CARIÑO',
      descripcion: 'Brinda abrazos, consuelo y tomas de leche para calmar a tu bebé.',
      colorFondo: 'from-teal-500/25 via-cyan-500/15 to-teal-900/20',
      borde: 'border-teal-300/40',
      badgeBg: 'bg-teal-400 text-[#0b253c]',
      acentoTexto: 'text-teal-200',
      iconoPrincipal: Heart,
      miniTips: [
        { etiqueta: 'Arrullo suave', detalle: 'Contacto piel con piel' },
        { etiqueta: 'Lactancia', detalle: 'Efecto calmante natural' },
        { etiqueta: 'Paciencia', detalle: 'Mucho afecto y apego' }
      ],
      // Ilustración SVG nativa en React (Madre y bebé / Corazón de cuidado)
      ilustracion: (
        <svg viewBox="0 0 120 100" className="w-28 h-24 mx-auto drop-shadow-md">
          <circle cx="60" cy="50" r="42" className="fill-teal-400/20 stroke-teal-300/40" strokeWidth="2" />
          <path d="M60 78 C60 78 28 58 28 38 C28 26 38 20 48 24 C54 26 58 31 60 35 C62 31 66 26 72 24 C82 20 92 26 92 38 C92 58 60 78 60 78 Z" className="fill-teal-300/30 stroke-teal-200" strokeWidth="2.5" />
          <circle cx="52" cy="44" r="9" className="fill-amber-200" />
          <circle cx="67" cy="52" r="7" className="fill-amber-100" />
          <path d="M42 64 Q60 54 78 64" className="stroke-teal-100 fill-none" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      numero: '2',
      titulo: 'MONITOREO DE TEMPERATURA',
      descripcion: 'Vigila si hay fiebre leve. Si supera 38°C, consulta a tu pediatra.',
      colorFondo: 'from-emerald-500/25 via-green-500/15 to-emerald-900/20',
      borde: 'border-emerald-300/40',
      badgeBg: 'bg-emerald-400 text-[#0b253c]',
      acentoTexto: 'text-emerald-200',
      iconoPrincipal: Thermometer,
      miniTips: [
        { etiqueta: 'Termómetro', detalle: 'Controlar cada 4-6 h' },
        { etiqueta: 'Ropa ligera', detalle: 'No sobreabrigar al bebé' },
        { etiqueta: 'Alerta > 38°C', detalle: 'Consultar al médico' }
      ],
      // Ilustración SVG nativa en React (Termómetro digital y control térmico)
      ilustracion: (
        <svg viewBox="0 0 120 100" className="w-28 h-24 mx-auto drop-shadow-md">
          <circle cx="60" cy="50" r="42" className="fill-emerald-400/20 stroke-emerald-300/40" strokeWidth="2" />
          <rect x="52" y="18" width="16" height="48" rx="8" className="fill-white/90 stroke-emerald-200" strokeWidth="2.5" />
          <circle cx="60" cy="70" r="13" className="fill-rose-400 stroke-white" strokeWidth="2.5" />
          <rect x="57" y="32" width="6" height="30" rx="3" className="fill-rose-400" />
          <line x1="72" y1="28" x2="78" y2="28" className="stroke-emerald-200" strokeWidth="2" strokeLinecap="round" />
          <line x1="72" y1="38" x2="80" y2="38" className="stroke-amber-300" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="72" y1="48" x2="78" y2="48" className="stroke-emerald-200" strokeWidth="2" strokeLinecap="round" />
          <text x="84" y="41" className="fill-amber-200 text-[10px] font-bold">38°C</text>
        </svg>
      )
    },
    {
      numero: '3',
      titulo: 'DESCANSO ADECUADO',
      descripcion: 'Permite que tu bebé duerma lo suficiente. El descanso es parte de la recuperación.',
      colorFondo: 'from-amber-400/25 via-yellow-500/15 to-amber-900/20',
      borde: 'border-amber-300/40',
      badgeBg: 'bg-amber-300 text-[#0b253c]',
      acentoTexto: 'text-amber-200',
      iconoPrincipal: Moon,
      miniTips: [
        { etiqueta: 'Sueño reparador', detalle: 'Refuerza sus defensas' },
        { etiqueta: 'Ambiente tranquilo', detalle: 'Sin ruidos fuertes' },
        { etiqueta: 'Hidratación', detalle: 'Tomas frecuentes' }
      ],
      // Ilustración SVG nativa en React (Luna, estrellas y descanso)
      ilustracion: (
        <svg viewBox="0 0 120 100" className="w-28 h-24 mx-auto drop-shadow-md">
          <circle cx="60" cy="50" r="42" className="fill-amber-400/20 stroke-amber-300/40" strokeWidth="2" />
          <path d="M68 24 A26 26 0 1 0 90 62 A20 20 0 1 1 68 24 Z" className="fill-amber-200 stroke-amber-100" strokeWidth="2" />
          <text x="34" y="42" className="fill-white text-xs font-extrabold">Z</text>
          <text x="44" y="32" className="fill-amber-200 text-sm font-extrabold">z</text>
          <text x="54" y="24" className="fill-sky-200 text-xs font-extrabold">z</text>
        </svg>
      )
    },
    {
      numero: '4',
      titulo: 'OBSERVA LOS SÍNTOMAS',
      descripcion: 'Espera irritabilidad leve o enrojecimiento. Reporta cualquier reacción inusual inmediatamente.',
      colorFondo: 'from-rose-500/25 via-orange-500/15 to-rose-900/20',
      borde: 'border-rose-300/40',
      badgeBg: 'bg-rose-400 text-[#0b253c]',
      acentoTexto: 'text-rose-200',
      iconoPrincipal: AlertCircle,
      miniTips: [
        { etiqueta: 'Sitio de punción', detalle: 'Paños de agua fría (no hielo)' },
        { etiqueta: 'No masajear', detalle: 'No apretar la zona vacunada' },
        { etiqueta: 'Pediatra', detalle: 'Acudir ante signos de alarma' }
      ],
      // Ilustración SVG nativa en React (Curita/Sitio de aplicación y teléfono médico)
      ilustracion: (
        <svg viewBox="0 0 120 100" className="w-28 h-24 mx-auto drop-shadow-md">
          <circle cx="60" cy="50" r="42" className="fill-rose-400/20 stroke-rose-300/40" strokeWidth="2" />
          <g transform="rotate(-25 60 50)">
            <rect x="30" y="38" width="60" height="24" rx="12" className="fill-amber-200 stroke-rose-200" strokeWidth="2" />
            <rect x="48" y="38" width="24" height="24" className="fill-amber-100 stroke-rose-200/60" strokeWidth="1.5" />
            <circle cx="55" cy="46" r="1.5" className="fill-rose-400" />
            <circle cx="65" cy="46" r="1.5" className="fill-rose-400" />
            <circle cx="55" cy="54" r="1.5" className="fill-rose-400" />
            <circle cx="65" cy="54" r="1.5" className="fill-rose-400" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <section id="cuidados" className="max-w-7xl mx-auto px-6 py-20">
      
      {/* ENCABEZADO DE LA SECCIÓN */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs font-semibold tracking-wide uppercase mb-4">
            <Baby className="w-4 h-4 text-teal-300" /> Guía Práctica para Padres
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Recomendaciones después de <span className="text-sky-300">vacunar a un bebé</span>
          </h2>
          <p className="text-sky-100/85 text-base mt-3">
            Conoce cómo aliviar las molestias normales tras la aplicación de una vacuna y qué signos debes vigilar en casa.
          </p>
        </div>

        {/* BOTÓN PARA VER O DESCARGAR LA INFOGRAFÍA ILUSTRADA ORIGINAL */}
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={() => setMostrarAfiche(true)}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-sm font-semibold text-white transition cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 text-sky-300" />
            Ver Afiche Ilustrado
          </button>
          <a
            href="/recomendaciones-bebe.jpeg"
            download="Recomendaciones-Post-Vacunacion-InmuniApp.jpg"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-sky-300 hover:bg-sky-200 text-[#0b253c] text-sm font-extrabold transition shadow-lg"
          >
            <Download className="w-4 h-4" />
            Descargar Imagen
          </a>
        </div>
      </div>

      {/* LAS 4 COLUMNAS INTERACTIVAS DE LA INFOGRAFÍA */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {pasosCuidado.map((paso, index) => {
          const IconComponent = paso.iconoPrincipal;
          return (
            <div
              key={index}
              className={`rounded-3xl bg-gradient-to-b ${paso.colorFondo} border ${paso.borde} backdrop-blur-xl p-6 flex flex-col justify-between shadow-xl hover:-translate-y-1 transition duration-300`}
            >
              <div>
                {/* Número y Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-10 h-10 rounded-2xl ${paso.badgeBg} font-extrabold text-xl flex items-center justify-center shadow-md`}>
                    {paso.numero}.
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                    <IconComponent className={`w-5 h-5 ${paso.acentoTexto}`} />
                  </div>
                </div>

                {/* Ilustración SVG Integrada */}
                <div className="my-3">
                  {paso.ilustracion}
                </div>

                {/* Título y Descripción */}
                <h3 className="text-lg font-extrabold text-white text-center mb-2 tracking-wide">
                  {paso.numero}. {paso.titulo}
                </h3>
                <p className="text-sm text-sky-100/90 text-center leading-relaxed mb-6">
                  {paso.descripcion}
                </p>
              </div>

              {/* 3 Píldoras de Iconos de Cuidado (como los 3 círculos de cada tarjeta de tu imagen) */}
              <div className="space-y-2 pt-4 border-t border-white/15">
                {paso.miniTips.map((tip, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs bg-[#0b253c]/55 px-3 py-2 rounded-xl border border-white/10">
                    <span className={`font-bold ${paso.acentoTexto}`}>{tip.etiqueta}</span>
                    <span className="text-sky-100/75">{tip.detalle}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* BANNER INFERIOR DE SIGNOS DE ALARMA / CONTACTO PEDIÁTRICO */}
      <div className="p-6 rounded-3xl bg-rose-500/15 border border-rose-300/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-400/20 border border-rose-300/40 flex items-center justify-center shrink-0">
            <PhoneCall className="w-6 h-6 text-rose-300" />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-extrabold text-white">
              ¿Cuándo acudir de inmediato al Centro de Salud o Pediatra?
            </h4>
            <p className="text-xs md:text-sm text-rose-100/90 mt-0.5">
              Si la fiebre supera los <strong>38°C</strong>, el llanto es inconsolable por más de 3 horas, notas inflamación excesiva en el sitio de la inyección o decaimiento extremo. <strong>Nunca automediques al bebé sin indicación médica.</strong>
            </p>
          </div>
        </div>
        <span className="px-4 py-2 rounded-xl bg-rose-400/25 border border-rose-300/40 text-rose-100 text-xs font-extrabold uppercase tracking-wider shrink-0">
          Atención Oportuna
        </span>
      </div>

      {/* MODAL LIGHTBOX PARA VER EL AFICHE ORIGINAL EN GRANDE */}
      {mostrarAfiche && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setMostrarAfiche(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0b253c] border border-white/20 rounded-3xl p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="font-bold text-sm text-sky-200">
                Afiche Ilustrado: Recomendaciones después de vacunar a un bebé
              </span>
              <button 
                onClick={() => setMostrarAfiche(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img 
              src="/recomendaciones-bebe.jpeg" 
              alt="Recomendaciones después de vacunar a un bebé" 
              className="w-full h-auto max-h-[75vh] object-contain rounded-2xl mx-auto"
            />
          </div>
        </div>
      )}

    </section>
  );
}