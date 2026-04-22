import { DonationBankAcccount } from '../interfaces/donation-bank-account.interface';

export const BCP_ACCOUNTS: DonationBankAcccount[] = [
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
];

export const INTERBANK_ACCOUNTS: DonationBankAcccount[] = [
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
];

export const BBVA_ACCOUNTS: DonationBankAcccount[] = [
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
];
