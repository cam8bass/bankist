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

export const DEFAULT_ACCOUNT = {
  id: 0,
  username: "",
  lastname: "",
  firstname: "",
  movements: [],
  interestRate: 0,
  pin: 0,
  movementsDates: [],
};
