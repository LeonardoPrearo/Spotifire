import { Component, OnInit } from '@angular/core';
import {SubscriptionPlans} from "../../core/model/subscription-plan";

@Component({
  selector: 'app-subscription-cards',
  templateUrl: './subscription-cards.component.html',
  styleUrls: ['./subscription-cards.component.scss']
})
export class SubscriptionCardsComponent implements OnInit {

  subscriptionPlans : SubscriptionPlans = [
    {id: 1, subName: "Basic", price: 7.99, accountNumber: 1},
    {id: 2, subName: "Premium", price: 12.99, accountNumber: 3},
    {id: 3, subName: "Family", price: 19.99, accountNumber: 6},
    {id: 4, subName: "Martina", price: 24.99, accountNumber: 1}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
