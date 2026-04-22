export type GiveBank = {
  id: string;
  bank: string;
  accounts: GiveAcccount[];
};

export type GiveAcccount = {
  id: string;
  type: string;
  accountNumber: string;
  cci?: string;
};
