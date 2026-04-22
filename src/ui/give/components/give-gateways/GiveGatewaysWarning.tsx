import { AlertType } from '@modules/shared/interfaces/alert.inferface';
import { Alert } from '@ui/shared/components/alert/Alert';
import clsx from 'clsx';

export function GiveGatewaysWarning({ className }: Props) {
  return (
    <Alert type={AlertType.WARNING} className={clsx(className)}>
      Envíe una foto del comprobante con tu{' '}
      <span className="font-semibold text-yellow-300">nombre</span> y menciona el{' '}
      <span className="font-semibold text-yellow-300">mes correspondiente</span> al diezmo al
      WhatsApp{' '}
      <a
        href="https://api.whatsapp.com/send?phone=51977442304"
        className="font-semibold underline text-yellow-300"
        rel="noopener noreferrer"
        target="_blank"
      >
        977 442 304
      </a>{' '}
      o al correo{' '}
      <a href="mailto:finanzas@catedraldefe.pe" className="font-semibold underline text-yellow-300">
        finanzas@catedraldefe.pe
      </a>
    </Alert>
  );
}

type Props = {
  className?: string;
};
