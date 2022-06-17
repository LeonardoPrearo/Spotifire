import {SubscriptionPlan} from "./subscription-plan";

export interface User {
  id: number,
  userName: string | undefined,
  userSurname: string,
  email:string,
  cardNumber: string,
  cardExpiration: string,
  cvv: number,
  planType: SubscriptionPlan,
  planDuration: number
}

export type Users = User[]
