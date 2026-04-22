'use client';

import { useDontaionViewsContext } from '@modules/donation-dialog/contexts/DonationViews.context';
import { AlertType } from '@modules/shared/interfaces/alert.inferface';
import { Alert } from '@ui/shared/components/alert/Alert';

import { DonationView } from '@/modules/donation-dialog/interfaces/donation-view.interface';

export function DonationWarning() {
  const { view } = useDontaionViewsContext();
  const { BBVA, BCP, INTERBANK } = DonationView;

  if (![BBVA, BCP, INTERBANK].includes(view)) return;

  return (
    <Alert type={AlertType.WARNING} className="mt-4">
      Envíe una foto del comprobante con tu <span className="font-semibold">nombre</span> y menciona
      el <span className="font-semibold">mes correspondiente</span> al diezmo al Whatsapp{' '}
      <a
        href="https://api.whatsapp.com/send?phone=51977442304"
        className="font-semibold underline"
        rel="noopener noreferrer"
        target="_blank"
      >
        977 442 304
      </a>{' '}
      o al correo{' '}
      <a href="mailto:finanzas@catedraldefe.pe" className="font-semibold underline">
        finanzas@catedraldefe.pe
      </a>
    </Alert>
  );
}
