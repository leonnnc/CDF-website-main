import { GiveBank } from '../interfaces/give-account.interface';

export const GIVE_ACCOUNTS: GiveBank[] = [
  {
    id: 'bcp',
    bank: 'BCP',
    accounts: [
      {
        id: 'bcp-cuenta-corriente-soles',
        type: 'Cuenta Corriente soles',
        accountNumber: '193-2259567-0-07',
        cci: '002-193-002259567007-10',
      },
      {
        id: 'bcp-cuenta-dolares',
        type: 'Cuenta Corriente dólares',
        accountNumber: '191-2456846-1-34',
        cci: '002-191-002456846134-57',
      },
    ],
  },
  {
    id: 'interbank',
    bank: 'Interbank',
    accounts: [
      {
        id: 'interbank-ahorros-soles',
        type: 'Cuenta de ahorros soles',
        accountNumber: '296-3002599400',
      },
      {
        id: 'interbank-ahorros-dolares',
        type: 'Cuenta de ahorros dólares',
        accountNumber: '296-3002599425',
      },
    ],
  },
  {
    id: 'bbva',
    bank: 'BBVA',
    accounts: [
      {
        id: 'bbva-ahorros-soles',
        type: 'Cuenta de ahorros soles',
        accountNumber: '0011-0189-0200485101-85',
      },
      {
        id: 'bbva-ahorros-dolares',
        type: 'Cuenta de ahorros dólares',
        accountNumber: '0011-0189-0200486128-88',
      },
    ],
  },
];
