import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongCardsComponent } from './song-cards/song-cards.component';
import { SubscriptionCardsComponent } from './subscription-cards/subscription-cards.component';



@NgModule({
    declarations: [
        SongCardsComponent,
         SubscriptionCardsComponent
    ],
  exports: [
    SongCardsComponent,
    SubscriptionCardsComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
