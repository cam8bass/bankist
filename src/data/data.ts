import type { AccountsInterface } from "@/interfaces";

export default [
  {
    id: 1,
    username: "cam",
    lastname: "laignel",
    firstname: "camille",
    movements: [
      ["amazone prime", -6.99],
      ["apple music", -10.99],
      ["leclerc", -180],
      ["salaire", +2000],
      ["impot", -83],
      ["fleuriste", -32],
      ["tabac", -90],
      ["edf", -160],
      ["eau", -60],
      ["pension", 240],
    ],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
      "2019-11-18T21:31:17.178Z",
      "2019-12-23T07:42:02.383Z",
      "2020-01-28T09:15:04.904Z",
      "2020-04-01T10:17:24.185Z",
      "2020-05-08T14:11:59.604Z",
      "2020-07-26T17:01:17.194Z",
      "2020-07-28T23:36:17.929Z",
      "2020-08-01T10:51:36.790Z",
      "2022-05-15T10:51:36.790Z",
      "2021-03-10T10:51:36.790Z",
    ],
  },
  {
    id: 2,
    username: "so",
    lastname: "philippe",
    firstname: "sophie",
    movements: [
      ["La tricote", -80],
      ["Le cheval magic", -74, 99],
      ["leclerc", -150],
      ["salaire", +2560],
      ["impot", -99],
      ["edf", -60],
      ["eau", -30],
    ],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
      "2019-11-30T09:48:16.867Z",
      "2019-12-25T06:04:23.907Z",
      "2020-01-25T14:18:46.235Z",
      "2020-02-05T16:33:06.386Z",
      "2020-04-10T14:43:26.374Z",
      "2020-06-25T18:49:59.371Z",
      "2020-07-26T12:01:20.894Z",
    ],
  },
] as AccountsInterface[];
