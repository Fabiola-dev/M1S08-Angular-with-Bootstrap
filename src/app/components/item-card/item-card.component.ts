import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() personagem: any = {
    name: "Fox Mulder",
    image: "./assets/mulder.jpg",
    actorName: "David Duchovny",
    description: "Fox William Mulder is one of the protagonists of The X-Files television series. A highly skilled yet unconventional FBI Agent, Mulder specializes in paranormal investigation, leading the X-Files unit with Dana Scully.",
  }
}
