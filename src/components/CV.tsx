import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Download, Mail } from 'lucide-react';

export function CV() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/cv/Andrea_Crevacore_CV_${i18n.language}.pdf`;
    link.download = `Andrea_Crevacore_CV_${i18n.language}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage({ type: 'error', text: t('cv.error') });
      return;
    }

    setSending(true);
    setMessage(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: t('cv.success') });
      setEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: t('cv.error') });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="cv" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('cv.title')}</h2>
          <p className="text-neutral-600 text-lg">{t('cv.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300">
            <div className="mb-6 p-4 bg-white rounded-xl w-fit">
              <Download size={32} className="text-neutral-900" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('cv.download')}</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Scarica direttamente il mio curriculum vitae in formato PDF.
            </p>
            <button
              onClick={handleDownload}
              className="w-full px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {t('cv.download')}
            </button>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300">
            <div className="mb-6 p-4 bg-white rounded-xl w-fit">
              <Mail size={32} className="text-neutral-900" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('cv.sendEmail')}</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Ricevi il curriculum direttamente nella tua casella email.
            </p>
            <form onSubmit={handleSendEmail} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('cv.emailPlaceholder')}
                className="w-full px-4 py-3 rounded-full border border-neutral-300 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-opacity-20 transition-all duration-200"
                required
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {sending ? '...' : t('cv.send')}
              </button>
              {message && (
                <p className={`text-sm text-center ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
