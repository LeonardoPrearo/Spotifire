import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-cards',
  templateUrl: './song-cards.component.html',
  styleUrls: ['./song-cards.component.scss']
})
export class SongCardsComponent implements OnInit {

  Songs = [
    {id: 1, artist: "Achille Lauro", title: "Rolls Royce", duration: 2.12, img: "assets/ImmaginiProject/achille-lauro.jpg"},
    {id: 2, artist: "Dire Straits", title: "Money For Nothing", duration: 8.25, img: "assets/ImmaginiProject/dire-straits.jpg"},
    {id: 3, artist: "Renato Zero", title: "Il triangolo no", duration: 4.50, img: "assets/ImmaginiProject/renato-zero.jpg"},
    {id: 4, artist: "Tony Effe", title: "Effe", duration: 5.00, img:"assets/ImmaginiProject/TonyEffe.jpg"}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
