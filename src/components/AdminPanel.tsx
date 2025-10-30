import { useTranslation } from 'react-i18next';
import { Lock } from 'lucide-react';

export function AdminPanel() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6 p-4 bg-neutral-100 dark:bg-neutral-700 rounded-full w-fit mx-auto">
            <Lock size={32} className="text-neutral-600 dark:text-neutral-400" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
            {t('admin.title')}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Il pannello di amministrazione è temporaneamente disabilitato. 
            Il portfolio utilizza ora dati statici per migliori performance.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            Admin panel is temporarily disabled. 
            The portfolio now uses static data for better performance.
          </p>
        </div>
      </div>
    </div>
  );
}