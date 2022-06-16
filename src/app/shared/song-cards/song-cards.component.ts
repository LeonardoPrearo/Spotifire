import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-cards',
  templateUrl: './song-cards.component.html',
  styleUrls: ['./song-cards.component.scss']
})
export class SongCardsComponent implements OnInit {

  Songs = [
    {id: 1, artist: "Achille Lauro", title: "Rolls Royce", duration: 2.12, img: "assets/ImmaginiProject/achilleLauro.jpg"},
    {id: 2, artist: "Cristiano Malgioglio", title: "Mi sono innamorato di tuo marito", duration: 3.00, img: "assets/ImmaginiProject/cristianoMalgioglio.jpg"},
    {id: 3, artist: "Renato Zero", title: "Il triangolo no", duration: 4.50, img: "assets/ImmaginiProject/renatoZero.jpg"},
    {id: 4, artist: "Tony Effe", title: "Effe", duration: 5.00, img:"assets/ImmaginiProject/TonyEffe.jpg"}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
