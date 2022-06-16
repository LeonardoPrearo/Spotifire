export interface SubscriptionPlan {
  "id": number,
  "subName": string,
  "price": number,
  "accountNumber": number
}

export type SubscriptionPlans = SubscriptionPlan[]
