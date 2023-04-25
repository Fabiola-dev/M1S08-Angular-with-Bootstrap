import { Component, OnInit } from '@angular/core';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  personagem: any = [
    {
      name: "Fox Mulder",
      image: "./assets/mulder.jpg",
      actorName: "David Duchovny",
      description: "Fox William Mulder is one of the protagonists of The X-Files television series. A highly skilled yet unconventional FBI Agent, Mulder specializes in paranormal investigation, leading the X-Files unit with Dana Scully.",
    },
    {
      name: "Dana Scully",
      image: "./assets/scully.jpg",
      actorName: "Gillian Anderson",
      description: "Dana Katherine Scully is one of the protagonists of The X-Files television series. An FBI Special Agent and medical doctor with a background in hard science, Dana was placed in the X-Files unit to monitor and debunk Fox Mulder's work using her scientific expertise and perspective, and to report back to Division Chief Scott Blevins with her findings and analysis.",
    },
  ];

  constructor () {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'project-bootstrap-S08';

  //window.localstorage.setItem(‘menssagem’, JSON.stringify(menssagem))
  
  logInput(event:string) {
    console.log(event);
  }
  
}
