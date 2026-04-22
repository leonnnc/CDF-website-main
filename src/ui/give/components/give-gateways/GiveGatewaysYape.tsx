'use client';

import { isTimeInRangeOnDay } from '@modules/shared/helpers/date.helper';
import GiveGatewaysYapeStyles from '@ui/give/styles/give-gateways/give-gateways-yape.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { GiveGatewaysCard } from './GiveGatewaysCard';

export function GiveGatewaysYape() {
  const isInDynamis = isTimeInRangeOnDay({ day: 6, startAt: 19, endAt: 22 });

  return (
    <GiveGatewaysCard decoration={2}>
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-center items-center">
        <div
          className={clsx(
            {
              'bg-white': isInDynamis,
              'bg-primary-800': !isInDynamis,
            },
            'shrink-0 grid place-items-center w-4/5 max-w-60 md:w-48 aspect-square p-1.5 rounded-lg'
          )}
        >
          {isInDynamis && (
            <Image
              src="/images/donation-dialog/yape-qr.webp"
              alt="codigo qr de yape"
              height="200"
              width="200"
              className="h-full w-full object-cover"
            />
          )}
          {!isInDynamis && (
            <p className="text-center text-small">
              El código QR se mostrará durante el servicio de{' '}
              <span className="font-semibold text-yellow-300">Dynamis</span>
            </p>
          )}
        </div>
        <div className={clsx(GiveGatewaysYapeStyles.description, 'text-center md:text-left')}>
          <p className="text-bigger md:text-h4 font-bold mb-4 md:mb-8">Pago con QR</p>
          <p className="mb-2 md:mb-4">
            Escanea el código QR para realizar tu donación de manera rápida y segura. Compatible con
            Yape y Plin.
          </p>
          <p>Nombre: Joel Fernando Julca Sobrino</p>
        </div>
      </div>
    </GiveGatewaysCard>
  );
}
