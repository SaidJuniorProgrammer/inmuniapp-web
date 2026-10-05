import React from 'react';
import { HelpCircle, CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';

export default function MitosVerdades() {
  const mitosLista = [
    {
      numero: '01',
      mito: 'Aplicar varias vacunas en una sola cita recarga o debilita las defensas del bebé.',
      verdad: 'El sistema inmunológico de un niño tiene la capacidad de responder a miles de antígenos a la vez de forma segura. Aplicar vacunas combinadas (como la Hexavalente) protege al menor contra múltiples enfermedades graves de manera oportuna y le evita pinchazos adicionales.'
    },
    {
      numero: '02',
      mito: 'Si el niño se retrasó meses en una vacuna, hay que reiniciar todo el esquema desde cero.',
      verdad: 'Las dosis recibidas anteriormente conservan la memoria inmunológica en el cuerpo; ninguna vacuna puesta se pierde. En InmuniApp ayudamos al profesional a calcular la dosis exacta que falta para continuar y ponerse al día sin repetir lo que ya se aplicó.'
    },
    {
      numero: '03',
      mito: 'Si el bebé tiene resfrío o moquitos no se le puede vacunar.',
      verdad: 'Síntomas leves como mucosidad, tos leve o febrícula no contraindican la vacunación. Solo en casos de fiebre alta (mayor a 38.5 °C) o enfermedades moderadas a severas se recomienda postergar la dosis bajo indicación médica.'
    },
    {
      numero: '04',
      mito: 'La vacuna contra el Virus del Papiloma Humano (VPH) es únicamente para las niñas.',
      verdad: 'Según el nuevo esquema nacional, la vacuna contra el VPH se administra a los 9 años de edad tanto a niñas como a niños en dosis única, previniendo diversos tipos de cáncer e infecciones en ambos sexos a futuro.'
    },
    {
      numero: '05',
      mito: 'Las vacunas ya no son necesarias porque muchas de esas enfermedades ya no existen.',
      verdad: 'Las enfermedades han disminuido justamente gracias a la vacunación masiva, pero los virus y bacterias siguen circulando a nivel mundial. Si se bajan las coberturas de vacunación, las enfermedades graves pueden reaparecer rápidamente en la comunidad.'
    }
  ];

  return (
    <section id="mitos" className="bg-white/5 backdrop-blur-lg border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/15 border border-sky-300/30 text-sky-200 text-xs font-semibold tracking-wide uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-sky-300" /> Educación Basada en Evidencia
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            5 Mitos y Verdades sobre la <span className="text-sky-300">Vacunación Infantil</span>
          </h2>
          <p className="text-sky-100/80 text-base">
            Resolvemos las dudas más frecuentes de las familias con información médica verificada para proteger a tu bebé con tranquilidad.
          </p>
        </div>

        {/* GRID DE MITOS Y VERDADES */}
        <div className="grid md:grid-cols-2 gap-6">
          {mitosLista.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 md:p-7 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl flex flex-col justify-between hover:border-sky-300/40 transition shadow-lg ${
                index === 4 ? 'md:col-span-2 lg:col-span-2 max-w-3xl mx-auto w-full' : ''
              }`}
            >
              {/* BLOQUE DEL MITO */}
              <div className="mb-5 pb-5 border-b border-white/10">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30">
                    <XCircle className="w-3.5 h-3.5 text-rose-300" /> Mito #{item.numero}
                  </span>
                  <HelpCircle className="w-5 h-5 text-white/30" />
                </div>
                <p className="text-lg font-bold text-white italic leading-snug">
                  "{item.mito}"
                </p>
              </div>

              {/* BLOQUE DE LA VERDAD (FALSO + EXPLICACIÓN) */}
              <div className="p-4 rounded-2xl bg-[#0b253c]/60 border border-cyan-300/25">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    Verdad: FALSO
                  </span>
                </div>
                <p className="text-sm text-sky-100/90 leading-relaxed">
                  {item.verdad}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}