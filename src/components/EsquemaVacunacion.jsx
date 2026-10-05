import React, { useState } from 'react';
import { 
  Baby, 
  Syringe, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  CalendarClock,
  CheckCircle2,
  Download,
  FileText,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export default function EsquemaVacunacion() {
  const [grupoActivo, setGrupoActivo] = useState('menores1');

  // Novedades explicadas en lenguaje sencillo y amigable para la familia
  const mejorasAmigables = [
    {
      etiqueta: 'Menos pinchazos',
      antes: 'Pentavalente + Polio',
      ahora: 'Vacuna Hexavalente',
      descripcion: 'Protege contra 6 enfermedades en una sola aplicación a los 2, 4, 6 y 18 meses.',
      color: 'from-cyan-400/20 to-sky-500/10 border-cyan-300/30'
    },
    {
      etiqueta: 'Mayor cobertura',
      antes: 'Neumococo 10',
      ahora: 'Neumococo 13',
      descripcion: 'Amplía la defensa contra 13 tipos de bacterias que causan neumonía, otitis y meningitis.',
      color: 'from-sky-400/20 to-blue-500/10 border-sky-300/30'
    },
    {
      etiqueta: 'Igualdad de protección',
      antes: 'Solo niñas (2 dosis)',
      ahora: 'VPH Niñas y Niños',
      descripcion: 'A los 9 años ahora se vacuna tanto a niñas como a niños con una sola dosis única.',
      color: 'from-emerald-400/20 to-teal-500/10 border-emerald-300/30'
    },
    {
      etiqueta: 'Protección materna',
      antes: 'Solo vacuna dT',
      ahora: 'Nueva Vacuna Tdap',
      descripcion: 'Se aplica una dosis en cada embarazo para proteger al bebé contra la tosferina desde el vientre.',
      color: 'from-amber-400/20 to-orange-500/10 border-amber-300/30'
    },
    {
      etiqueta: 'Esquema regular',
      antes: 'Campaña externa',
      ahora: 'Incluye COVID-19',
      descripcion: 'Integrada al esquema regular para niños desde 6 meses, adultos y mayores de 65 años sin dosis previa.',
      color: 'from-purple-400/20 to-indigo-500/10 border-purple-300/30'
    }
  ];

  // Datos organizados por edad del PDF oficial del MSP 2025
  const gruposEtarios = {
    menores1: {
      nombre: 'Bebés (< 1 año)',
      subtitulo: 'Desde las primeras 24 horas de nacido hasta los 6 meses',
      icono: Baby,
      etapas: [
        {
          edad: 'Recién Nacido',
          tiempo: 'Primeras 24 horas de vida',
          vacunas: [
            {
              nombre: 'BCG',
              dosis: 'Dosis única',
              esActualizada: false,
              previene: 'Meningitis tuberculosa y tuberculosis pulmonar diseminada.'
            },
            {
              nombre: 'Hepatitis B (HB)',
              dosis: 'Dosis única (24h)',
              esActualizada: false,
              previene: 'Hepatitis B por transmisión vertical (madre con antecedente de HB).'
            }
          ]
        },
        {
          edad: '2 Meses',
          tiempo: 'Primer control de lactante',
          vacunas: [
            {
              nombre: 'Rotavirus',
              dosis: '1ra Dosis',
              esActualizada: false,
              previene: 'Enfermedad diarreica aguda grave por rotavirus.'
            },
            {
              nombre: 'Hexavalente',
              dosis: '1ra Dosis',
              esActualizada: true,
              cambioTexto: 'Reemplaza a Pentavalente + fIPV',
              previene: '6 enfermedades: Difteria, Tétanos, Tosferina, Hepatitis B, Polio inactivada (Tipos 1, 2 y 3) y Haemophilus influenzae tipo B.'
            },
            {
              nombre: 'Neumococo 13',
              dosis: '1ra Dosis',
              esActualizada: true,
              cambioTexto: 'Reemplaza a Neumococo 10',
              previene: 'Neumonías, meningitis y otitis por Streptococcus pneumoniae.'
            }
          ]
        },
        {
          edad: '4 Meses',
          tiempo: 'Segundo control de lactante',
          vacunas: [
            {
              nombre: 'Rotavirus',
              dosis: '2da Dosis',
              esActualizada: false,
              previene: 'Enfermedad diarreica aguda por rotavirus.'
            },
            {
              nombre: 'Hexavalente',
              dosis: '2da Dosis',
              esActualizada: true,
              cambioTexto: 'Reemplaza a Pentavalente + fIPV',
              previene: 'Difteria, Tétanos, Tosferina, Hepatitis B, Polio inactivada y Haemophilus influenzae tipo B.'
            },
            {
              nombre: 'Neumococo 13',
              dosis: '2da Dosis',
              esActualizada: true,
              cambioTexto: 'Reemplaza a Neumococo 10',
              previene: 'Neumonías, meningitis y otitis por Streptococcus pneumoniae.'
            }
          ]
        },
        {
          edad: '6 Meses',
          tiempo: 'Tercer control de lactante',
          vacunas: [
            {
              nombre: 'bOPV (Polio oral)',
              dosis: 'Dosis 6 meses',
              esActualizada: false,
              previene: 'Poliomielitis.'
            },
            {
              nombre: 'Hexavalente',
              dosis: '3ra Dosis',
              esActualizada: true,
              cambioTexto: 'Reemplaza a Pentavalente',
              previene: 'Difteria, Tétanos, Tosferina, Hepatitis B, Polio inactivada y Haemophilus influenzae tipo B.'
            },
            {
              nombre: 'Neumococo 13',
              dosis: '3ra Dosis',
              esActualizada: true,
              cambioTexto: 'Reemplaza a Neumococo 10',
              previene: 'Neumonías, meningitis y otitis por Streptococcus pneumoniae.'
            },
            {
              nombre: 'Influenza Estacional',
              dosis: 'Anual',
              esActualizada: false,
              previene: 'Gripe e influenza estacional pediátrica.'
            }
          ]
        }
      ]
    },
    meses12a23: {
      nombre: '1 a 2 Años (12-23m)',
      subtitulo: 'Vacunas del primer año y refuerzos de los 15 y 18 meses',
      icono: CalendarClock,
      etapas: [
        {
          edad: '12 Meses (1 año)',
          tiempo: 'Al cumplir el primer año',
          vacunas: [
            {
              nombre: 'Fiebre Amarilla (FA)',
              dosis: 'Dosis única',
              esActualizada: false,
              previene: 'Fiebre amarilla.'
            },
            {
              nombre: 'SRP 1 (Triple Viral)',
              dosis: '1ra Dosis',
              esActualizada: false,
              previene: 'Sarampión, Rubéola y Parotiditis (Paperas).'
            }
          ]
        },
        {
          edad: '15 Meses',
          tiempo: 'Año y tres meses',
          vacunas: [
            {
              nombre: 'Varicela',
              dosis: 'Dosis única',
              esActualizada: false,
              previene: 'Varicela.'
            }
          ]
        },
        {
          edad: '18 Meses',
          tiempo: 'Año y medio (Refuerzos)',
          vacunas: [
            {
              nombre: 'Hexavalente',
              dosis: 'Refuerzo',
              esActualizada: true,
              cambioTexto: 'Reemplaza a DPT',
              previene: 'Difteria, Tétanos, Tosferina, Hepatitis B, Polio y Haemophilus influenzae tipo B.'
            },
            {
              nombre: 'bOPV',
              dosis: 'Refuerzo oral',
              esActualizada: false,
              previene: 'Poliomielitis.'
            },
            {
              nombre: 'SRP 2 (Triple Viral)',
              dosis: '2da Dosis',
              esActualizada: false,
              previene: 'Sarampión, Rubéola y Parotiditis (Paperas).'
            }
          ]
        }
      ]
    },
    ninez: {
      nombre: 'Niñez (5 y 9 años)',
      subtitulo: 'Refuerzos en etapa escolar y prevención del VPH',
      icono: Users,
      etapas: [
        {
          edad: '5 Años',
          tiempo: 'Ingreso escolar',
          vacunas: [
            {
              nombre: 'DPT',
              dosis: 'Refuerzo escolar',
              esActualizada: false,
              previene: 'Difteria, Tosferina y Tétanos.'
            },
            {
              nombre: 'bOPV',
              dosis: 'Refuerzo escolar',
              esActualizada: false,
              previene: 'Poliomielitis.'
            }
          ]
        },
        {
          edad: '9 Años (Niñas y Niños)',
          tiempo: 'Protección en preadolescencia',
          vacunas: [
            {
              nombre: 'HPV (Papiloma Humano)',
              dosis: 'Dosis Única',
              esActualizada: true,
              cambioTexto: 'Ahora incluye a niños varones (1 dosis)',
              previene: 'Infecciones y tipos de cáncer asociados al Virus del Papiloma Humano.'
            }
          ]
        }
      ]
    },
    adolescencia: {
      nombre: 'Adolescencia (15 años)',
      subtitulo: 'Refuerzo de protección en la juventud',
      icono: ShieldCheck,
      etapas: [
        {
          edad: '15 Años',
          tiempo: 'Refuerzo adolescente',
          vacunas: [
            {
              nombre: 'dT (Difteria y Tétanos)',
              dosis: 'Refuerzo',
              esActualizada: false,
              previene: 'Difteria y Tétanos.'
            }
          ]
        }
      ]
    },
    adultos: {
      nombre: 'Embarazo y Adultos',
      subtitulo: 'Embarazadas, grupos de riesgo, viajeros y COVID-19',
      icono: HeartHandshake,
      etapas: [
        {
          edad: 'Mujeres Embarazadas',
          tiempo: 'Control prenatal',
          vacunas: [
            {
              nombre: 'Tdap',
              dosis: '1 dosis en cada embarazo',
              esActualizada: true,
              cambioTexto: 'Incorporada al esquema 2025',
              previene: 'Tosferina acelular, Tétanos y Difteria para proteger a la madre y al recién nacido.'
            },
            {
              nombre: 'dT y Hepatitis B (HB)',
              dosis: 'Según antecedente vacunal',
              esActualizada: false,
              previene: 'Difteria, Tétanos y Hepatitis B.'
            }
          ]
        },
        {
          edad: 'Adultos, Grupos de Riesgo y Viajeros',
          tiempo: 'Según historial o condición de salud',
          vacunas: [
            {
              nombre: 'dT Adultos',
              dosis: '5 dosis según antecedente',
              esActualizada: false,
              previene: 'Difteria y Tétanos para mujeres en edad fértil y hombres.'
            },
            {
              nombre: 'Hepatitis B / SR / Fiebre Amarilla',
              dosis: 'Según antecedente',
              esActualizada: false,
              previene: 'Personal de salud, viajeros, PPL y grupos prioritarios.'
            },
            {
              nombre: 'Influenza Estacional Triv. Adulto',
              dosis: 'Anual',
              esActualizada: false,
              previene: 'Embarazadas, personal de salud, enfermos crónicos, mayores de 65 años y personas con discapacidad.'
            },
            {
              nombre: 'COVID-19',
              dosis: 'Esquema Regular',
              esActualizada: true,
              cambioTexto: 'Incluida en el esquema regular 2025',
              previene: 'Niños (6m a 4 años), personas de 5 años o más, y mayores de 65 años sin vacunación previa.'
            }
          ]
        }
      ]
    }
  };

  const grupoSeleccionado = gruposEtarios[grupoActivo];

  return (
    <section id="esquema" className="max-w-7xl mx-auto px-6 py-20">
      
      {/* 1. ENCABEZADO PRINCIPAL */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/15 border border-cyan-300/30 text-cyan-200 text-xs font-semibold tracking-wide uppercase mb-4">
          <Sparkles className="w-4 h-4 text-cyan-300" /> Ministerio de Salud Pública del Ecuador
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Esquema Nacional de Vacunación <span className="text-sky-300">2025</span>
        </h2>
        <p className="text-sky-100/85 text-base md:text-lg">
          Selecciona la edad de tu hijo o familiar para conocer de forma clara qué vacunas le corresponden y de qué enfermedades lo protegen.
        </p>
      </div>

      {/* 2. PESTAÑAS DE EDAD GRANDES Y AMIGABLES (PRIMERO LO MÁS IMPORTANTE) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {Object.entries(gruposEtarios).map(([key, grupo]) => {
          const IconComponent = grupo.icono;
          const activo = grupoActivo === key;
          return (
            <button
              key={key}
              onClick={() => setGrupoActivo(key)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl font-bold text-sm transition-all cursor-pointer text-center border ${
                activo
                  ? 'bg-white text-[#0b253c] border-white shadow-xl scale-[1.02]'
                  : 'bg-white/10 text-sky-100 hover:bg-white/15 border-white/15'
              }`}
            >
              <IconComponent className={`w-6 h-6 mb-2 ${activo ? 'text-[#16426b]' : 'text-sky-300'}`} />
              <span>{grupo.nombre}</span>
            </button>
          );
        })}
      </div>

      {/* 3. TARJETAS DE VACUNAS POR ETAPA (DISEÑO LIMPIO TIPO LÍNEA DE TIEMPO) */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/15 pb-5 mb-8">
          <div>
            <h3 className="text-2xl font-extrabold text-white">{grupoSeleccionado.nombre}</h3>
            <p className="text-sm text-sky-200/85">{grupoSeleccionado.subtitulo}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-cyan-200 bg-cyan-400/15 border border-cyan-300/30 px-3.5 py-2 rounded-xl self-start sm:self-auto">
            <Sparkles className="w-4 h-4 text-cyan-300 shrink-0" />
            <span>Las vacunas con borde celeste son <strong>Actualizaciones 2025</strong></span>
          </div>
        </div>

        <div className="space-y-6">
          {grupoSeleccionado.etapas.map((etapa, i) => (
            <div key={i} className="rounded-2xl bg-[#0b253c]/50 border border-white/10 p-5 md:p-6">
              
              {/* Título de la edad */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-sky-400/20 border border-sky-300/30 flex items-center justify-center text-sky-300 font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-extrabold text-white leading-none">{etapa.edad}</h4>
                    <span className="text-xs text-sky-200/75">{etapa.tiempo}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-sky-200">
                  {etapa.vacunas.length} {etapa.vacunas.length === 1 ? 'vacuna en esta etapa' : 'vacunas en esta etapa'}
                </span>
              </div>

              {/* Tarjetas de cada vacuna */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {etapa.vacunas.map((vacuna, j) => (
                  <div
                    key={j}
                    className={`p-5 rounded-2xl border transition flex flex-col justify-between ${
                      vacuna.esActualizada
                        ? 'bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-transparent border-cyan-300/45 shadow-lg'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      {/* Cabecera de la vacuna */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="font-extrabold text-base text-white flex items-center gap-2">
                          <Syringe className="w-4 h-4 text-sky-300 shrink-0" />
                          {vacuna.nombre}
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-sky-100 shrink-0">
                          {vacuna.dosis}
                        </span>
                      </div>

                      {/* Etiqueta amigable si hubo cambio en 2025 */}
                      {vacuna.esActualizada && vacuna.cambioTexto && (
                        <div className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-cyan-300 text-[#0b253c]">
                          <Sparkles className="w-3 h-3" /> {vacuna.cambioTexto}
                        </div>
                      )}

                      {/* Qué previene */}
                      <p className="text-xs text-sky-100/90 leading-relaxed">
                        <strong className="text-sky-200 block mb-0.5">¿De qué protege?</strong>
                        {vacuna.previene}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. RESUMEN VISUAL AMIGABLE: ¿QUÉ MEJORÓ EN EL ESQUEMA 2025? */}
      <div className="mb-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl font-extrabold text-white mb-2">
            ¿Qué mejoró en el Esquema 2025 frente al anterior?
          </h3>
          <p className="text-sm text-sky-200/80">
            El Ministerio de Salud Pública actualizó 5 puntos clave para brindar mayor protección con menos aplicaciones:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {mejorasAmigables.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} border backdrop-blur-md flex flex-col justify-between`}
            >
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white mb-3">
                  {item.etiqueta}
                </span>

                {/* Antes -> Ahora visual */}
                <div className="p-2.5 rounded-xl bg-[#0b253c]/60 border border-white/10 mb-3">
                  <div className="text-[11px] text-sky-200/60 line-through">
                    Antes: {item.antes}
                  </div>
                  <div className="text-xs font-extrabold text-cyan-300 flex items-center gap-1 mt-0.5">
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" /> {item.ahora}
                  </div>
                </div>

                <p className="text-xs text-sky-100/90 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. SECCIÓN DE DESCARGA DEL PDF OFICIAL DEL MSP */}
      <div className="p-7 md:p-9 rounded-3xl bg-gradient-to-r from-[#0b253c] via-[#133e68] to-[#0b253c] border border-cyan-300/35 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 border border-cyan-300/40 flex items-center justify-center shrink-0 shadow-inner">
              <FileText className="w-8 h-8 text-cyan-300" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 mb-2">
                Material Oficial Descargable
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">
                Descargar Esquema Nacional de Vacunación 2025 (PDF)
              </h3>
              <p className="text-sm text-sky-100/80 max-w-2xl">
                Guarda en tu celular o imprime la tabla oficial completa del Ministerio de Salud Pública del Ecuador para tenerla siempre a mano antes de cada control médico.
              </p>
            </div>
          </div>

          {/* Botones de Ver y Descargar */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end shrink-0">
            <a
              href="/esquema-vacunacion-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm transition"
            >
              <ExternalLink className="w-4 h-4 text-sky-300" />
              Ver Documento
            </a>

            <a
              href="/esquema-vacunacion-2025.pdf"
              download="Esquema-Nacional-Vacunacion-Ecuador-2025.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-300 hover:bg-cyan-200 text-[#0b253c] font-extrabold text-sm shadow-lg transition"
            >
              <Download className="w-4 h-4" />
              Descargar PDF Oficial
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}