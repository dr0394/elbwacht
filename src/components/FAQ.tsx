import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Welche Qualifikationen haben Ihre Sicherheitsmitarbeiter?',
    answer: 'Alle unsere Mitarbeiter verfügen mindestens über die gesetzlich vorgeschriebene §34a GewO Sachkundeprüfung. Viele unserer Mitarbeiter sind darüber hinaus IHK-geprüfte Fachkräfte für Schutz und Sicherheit. Regelmäßige Weiterbildungen in Bereichen wie Deeskalation, Brandschutz und Erste Hilfe sind für uns selbstverständlich.'
  },
  {
    question: 'Wie schnell können Sie einen Sicherheitsdienst bereitstellen?',
    answer: 'Bei Notfällen können wir innerhalb weniger Stunden Personal bereitstellen. Für geplante Einsätze empfehlen wir eine Vorlaufzeit von 2-3 Tagen, um eine optimale Vorbereitung und Einweisung zu gewährleisten. Kontaktieren Sie uns gerne für eine individuelle Absprache.'
  },
  {
    question: 'Wie werden die Sicherheitseinsätze dokumentiert?',
    answer: 'Wir nutzen digitale Systeme zur lückenlosen Dokumentation aller Sicherheitseinsätze. Sie erhalten regelmäßige Berichte über Vorkommnisse, Kontrollgänge und besondere Ereignisse. Bei Revierdiensten setzen wir GPS-Tracking und digitale Kontrollpunkte ein.'
  },
  {
    question: 'Sind Sie auch nachts und am Wochenende erreichbar?',
    answer: 'Ja, wir sind 24 Stunden am Tag, 7 Tage die Woche erreichbar. Unsere Notrufzentrale ist durchgehend besetzt und kann bei Bedarf sofort Personal entsenden. Auch an Feiertagen stehen wir Ihnen zur Verfügung.'
  },
  {
    question: 'In welchen Regionen sind Sie tätig?',
    answer: 'Unser Haupteinsatzgebiet ist Hamburg und Norddeutschland. Bei größeren Projekten oder langfristigen Aufträgen sind wir auch bundesweit für Sie im Einsatz. Sprechen Sie uns gerne auf Ihre spezifischen Anforderungen an.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
        `,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-royal-700 bg-royal-50 backdrop-blur-sm rounded-full">
            <span className="text-royal-700 font-black text-sm tracking-widest uppercase">Häufige Fragen</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            FAQ
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-royal-700/10 blur-xl opacity-0 group-hover:opacity-100 transition-all rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-royal-700/50 rounded-lg transition-all overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-shrink-0 p-2 bg-royal-700/20 border-2 border-royal-700 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-royal-700" strokeWidth={2.5} />
                    </div>
                    <span className="text-gray-900 font-bold text-lg tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-royal-700 transition-transform flex-shrink-0 ml-4 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="pl-12 pt-2 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-medium mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg p-8">
            <p className="text-gray-900 text-xl font-bold mb-3">
              Haben Sie weitere Fragen?
            </p>
            <p className="text-gray-700 font-medium mb-6">
              Kontaktieren Sie uns gerne - wir beraten Sie persönlich
            </p>
            <a
              href="tel: +494025330294"
              className="inline-block bg-royal-700 hover:bg-royal-800 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
               +49 40 25330294
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
