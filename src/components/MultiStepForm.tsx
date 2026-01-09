import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, MessageCircle, Mail, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface MultiStepFormProps {
  onClose: () => void;
}

export default function MultiStepForm({ onClose }: MultiStepFormProps) {
  const { theme } = useTheme();
  const [step, setStep] = useState(1);
  const [sendVia, setSendVia] = useState<'whatsapp' | 'email' | 'both'>('both');
  const [formData, setFormData] = useState({
    service: '',
    location: '',
    duration: '',
    urgency: '',
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const whatsappNumber = '491638467694';
    const message = `*Sicherheitsanfrage von ${formData.name}*

${formData.company ? `*Unternehmen:* ${formData.company}\n` : ''}*Telefon:* ${formData.phone}
*E-Mail:* ${formData.email}

*Gewünschte Leistung:* ${formData.service}
*Standort:* ${formData.location}
*Dauer:* ${formData.duration}
*Dringlichkeit:* ${formData.urgency}

${formData.message ? `*Zusätzliche Informationen:*\n${formData.message}` : ''}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const emailSubject = `Sicherheitsanfrage: ${formData.service} - ${formData.name}`;
    const emailBody = `Sehr geehrtes Elbwacht-Team,

hiermit möchte ich folgende Sicherheitsdienstleistung anfragen:

Kontaktdaten:
━━━━━━━━━━━━━━━━
Name: ${formData.name}
${formData.company ? `Unternehmen: ${formData.company}\n` : ''}Telefon: ${formData.phone}
E-Mail: ${formData.email}

Anfrage-Details:
━━━━━━━━━━━━━━━━
Leistung: ${formData.service}
Standort: ${formData.location}
Einsatzdauer: ${formData.duration}
Dringlichkeit: ${formData.urgency}

${formData.message ? `Zusätzliche Informationen:\n${formData.message}\n\n` : ''}Bitte kontaktieren Sie mich für ein unverbindliches Angebot.

Mit freundlichen Grüßen
${formData.name}`;

    const mailtoUrl = `mailto:info@elbwacht.de?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    if (sendVia === 'whatsapp') {
      window.open(whatsappUrl, '_blank');
    } else if (sendVia === 'email') {
      window.location.href = mailtoUrl;
    } else {
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);
    }

    onClose();
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.service !== '';
      case 2:
        return formData.location !== '' && formData.duration !== '' && formData.urgency !== '';
      case 3:
        return formData.name !== '' && formData.phone !== '' && formData.email !== '';
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`border-2 border-red-600/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-red-600/20 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 to-black'
          : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        <div className={`sticky top-0 border-b-2 border-red-600/50 p-6 flex items-center justify-between ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-black via-gray-900 to-black text-white'
            : 'bg-gradient-to-r from-white via-gray-50 to-white text-gray-900'
        }`}>
          <div className="flex-1">
            <h2 className={`text-2xl font-black mb-3 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Sicherheitsanfrage</h2>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm border-2 transition-all ${
                      step >= s
                        ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/50'
                        : 'bg-gray-800 text-gray-500 border-gray-700'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 4 && <div className={`w-6 h-1 rounded-full transition-all ${step > s ? 'bg-red-600' : 'bg-gray-800'}`}></div>}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-600/10 rounded-lg"
          >
            <X className="h-6 w-6" strokeWidth={2.5} />
          </button>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div>
              <h3 className={`text-2xl font-black mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Welche Leistung benötigen Sie?</h3>
              <div className="space-y-3">
                {[
                  'Objektschutz',
                  'Veranstaltungssicherheit',
                  'Revier- & Streifendienst',
                  'Empfangs- & Doorman-Service',
                  'Personenschutz',
                  'Baustellenbewachung',
                  'Sonstiges / Beratung',
                ].map((service) => (
                  <button
                    key={service}
                    onClick={() => handleInputChange('service', service)}
                    className={`w-full p-4 text-left border-2 rounded-lg transition-all font-semibold ${
                      formData.service === service
                        ? 'border-red-600 bg-red-600/20 shadow-lg shadow-red-600/20' + (theme === 'dark' ? ' text-white' : ' text-gray-900')
                        : (theme === 'dark'
                          ? 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-red-600/50 hover:bg-red-600/10'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-red-600/50 hover:bg-red-50')
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className={`text-2xl font-black mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Details zum Einsatz</h3>
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Standort / Einsatzort</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="z.B. Hamburg Innenstadt"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-red-600 outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Einsatzdauer</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Einmalig', 'Mehrere Tage', 'Langfristig', 'Nach Vereinbarung'].map((duration) => (
                      <button
                        key={duration}
                        onClick={() => handleInputChange('duration', duration)}
                        className={`p-3 border-2 rounded-lg transition-all font-semibold ${
                          formData.duration === duration
                            ? 'border-red-600 bg-red-600/20 shadow-lg shadow-red-600/20' + (theme === 'dark' ? ' text-white' : ' text-gray-900')
                            : (theme === 'dark'
                              ? 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-red-600/50 hover:bg-red-600/10'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-red-600/50 hover:bg-red-50')
                        }`}
                      >
                        {duration}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Wie dringend?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Sofort', 'Diese Woche', 'Nächste Woche', 'Langfristige Planung'].map((urgency) => (
                      <button
                        key={urgency}
                        onClick={() => handleInputChange('urgency', urgency)}
                        className={`p-3 border-2 rounded-lg transition-all font-semibold ${
                          formData.urgency === urgency
                            ? 'border-red-600 bg-red-600/20 shadow-lg shadow-red-600/20' + (theme === 'dark' ? ' text-white' : ' text-gray-900')
                            : (theme === 'dark'
                              ? 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-red-600/50 hover:bg-red-600/10'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-red-600/50 hover:bg-red-50')
                        }`}
                      >
                        {urgency}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className={`text-2xl font-black mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Ihre Kontaktdaten</h3>
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Ihr Name"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-red-600 outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Unternehmen</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Ihr Unternehmen (optional)"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-red-600 outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Telefon *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+494025330294"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-red-600 outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>E-Mail *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="ihre@email.de"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-red-600 outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className={`text-2xl font-black mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Zusätzliche Informationen</h3>
              <div>
                <label className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Haben Sie noch weitere Anmerkungen oder spezielle Anforderungen?
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Beschreiben Sie hier Ihre spezifischen Anforderungen..."
                  rows={4}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:border-red-600 outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                ></textarea>
              </div>

              <div className="mt-6 bg-red-600/10 p-6 border-2 border-red-600/30 rounded-lg">
                <h4 className={`font-black mb-4 text-lg tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Ihre Anfrage im Überblick:</h4>
                <div className={`space-y-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p><strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Leistung:</strong> {formData.service}</p>
                  <p><strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Standort:</strong> {formData.location}</p>
                  <p><strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Dauer:</strong> {formData.duration}</p>
                  <p><strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Dringlichkeit:</strong> {formData.urgency}</p>
                  <p><strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Name:</strong> {formData.name}</p>
                  {formData.company && <p><strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Unternehmen:</strong> {formData.company}</p>}
                  <p><strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Telefon:</strong> {formData.phone}</p>
                  <p><strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>E-Mail:</strong> {formData.email}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className={`font-black mb-4 text-lg tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Wie möchten Sie die Anfrage senden?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    onClick={() => setSendVia('whatsapp')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      sendVia === 'whatsapp'
                        ? 'border-red-600 bg-red-600/20 shadow-lg shadow-red-600/20'
                        : (theme === 'dark'
                          ? 'border-gray-700 bg-gray-800/50 hover:border-red-600/50 hover:bg-red-600/10'
                          : 'border-gray-300 bg-white hover:border-red-600/50 hover:bg-red-50')
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <MessageCircle className="h-6 w-6 text-green-500" />
                      <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>WhatsApp</span>
                      {sendVia === 'whatsapp' && <CheckCircle className="h-4 w-4 text-red-500" />}
                    </div>
                  </button>

                  <button
                    onClick={() => setSendVia('email')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      sendVia === 'email'
                        ? 'border-red-600 bg-red-600/20 shadow-lg shadow-red-600/20'
                        : (theme === 'dark'
                          ? 'border-gray-700 bg-gray-800/50 hover:border-red-600/50 hover:bg-red-600/10'
                          : 'border-gray-300 bg-white hover:border-red-600/50 hover:bg-red-50')
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Mail className="h-6 w-6 text-blue-500" />
                      <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>E-Mail</span>
                      {sendVia === 'email' && <CheckCircle className="h-4 w-4 text-red-500" />}
                    </div>
                  </button>

                  <button
                    onClick={() => setSendVia('both')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      sendVia === 'both'
                        ? 'border-red-600 bg-red-600/20 shadow-lg shadow-red-600/20'
                        : (theme === 'dark'
                          ? 'border-gray-700 bg-gray-800/50 hover:border-red-600/50 hover:bg-red-600/10'
                          : 'border-gray-300 bg-white hover:border-red-600/50 hover:bg-red-50')
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex gap-1">
                        <MessageCircle className="h-5 w-5 text-green-500" />
                        <Mail className="h-5 w-5 text-blue-500" />
                      </div>
                      <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Beides</span>
                      {sendVia === 'both' && <CheckCircle className="h-4 w-4 text-red-500" />}
                    </div>
                  </button>
                </div>
              </div>

              <p className={`mt-6 text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Mit dem Absenden erklären Sie sich mit unserer Datenschutzerklärung einverstanden.
                {sendVia === 'whatsapp' && ' Ihre Anfrage wird per WhatsApp an uns gesendet.'}
                {sendVia === 'email' && ' Ihre Anfrage wird per E-Mail an uns gesendet.'}
                {sendVia === 'both' && ' Ihre Anfrage wird per WhatsApp und E-Mail an uns gesendet.'}
              </p>
            </div>
          )}
        </div>

        <div className={`sticky bottom-0 border-t-2 border-red-600/50 p-6 flex items-center justify-between ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-black via-gray-900 to-black'
            : 'bg-gradient-to-r from-white via-gray-50 to-white'
        }`}>
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center space-x-2 px-6 py-3 font-bold rounded-lg transition-all ${
              step === 1
                ? (theme === 'dark' ? 'text-gray-600' : 'text-gray-400') + ' cursor-not-allowed'
                : (theme === 'dark' ? 'text-white hover:text-red-500' : 'text-gray-900 hover:text-red-500') + ' hover:bg-red-600/10'
            }`}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
            <span>Zurück</span>
          </button>

          {step < 4 ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center space-x-2 px-8 py-3 font-black rounded-lg transition-all ${
                isStepValid()
                  ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30'
                  : (theme === 'dark'
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed border-2 border-gray-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed border-2 border-gray-300')
              }`}
            >
              <span>Weiter</span>
              <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-red-600 text-white px-8 py-3 font-black rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/30"
            >
              Anfrage absenden
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
