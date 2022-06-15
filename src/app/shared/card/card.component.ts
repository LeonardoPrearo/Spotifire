import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Songs = [
    {id: 1, artist: "Achille Lauro", title: "Rolls Royce", duration: 2.12, img: "assets/Immagini Project/achilleLauro.jpg"},
    {id: 2, artist: "Cristiano Malgioglio", title: "Mi sono innamorato di tuo marito", duration: 3.00, img: "assets/Immagini Project/cristianoMalgioglio.jpg"},
    {id: 3, artist: "Renato Zero", title: "Il triangolo no", duration: 4.50, img: "assets/Immagini Project/renatoZero.jpg"},
    {id: 4, artist: "Tony Effe", title: "Effe", duration: 5.00, img:"assets/Immagini Project/TonyEffe.jpg"}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
