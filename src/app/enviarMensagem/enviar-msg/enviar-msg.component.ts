import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviar-msg',
  templateUrl: './enviar-msg.component.html',
  styleUrls: ['./enviar-msg.component.scss']
})
export class EnviarMsgComponent implements OnInit {

  constructor() { 
    let divToChange = document.getElementById('navbar');
    
    divToChange.className = "navbar navbar-expand-lg customNav";
  }

  ngOnInit() {
  }

}
