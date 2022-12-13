export interface AccountsInterface {
  id: number;
  username: string;
  lastname: string;
  firstname: string;
  movements: [string, number][];
  interestRate: number;
  pin: number;
  movementsDates: string[];
}

export interface CurrentAccount extends AccountsInterface {
  total: {
    totalBalance: any;
    totalDeposit: any;
    totalWithdrawal: any;
    totalInterest: any;
  };
}

export const DEFAULT_ACCOUNT = {
  id: 0,
  username: "",
  lastname: "",
  firstname: "",
  movements: [],
  interestRate: 0,
  pin: 0,
  movementsDates: [],
  total: {
    totalBalance: 0,
    totalDeposit: 0,
    totalWithdrawal: 0,
    totalInterest: 0,
  },
};
