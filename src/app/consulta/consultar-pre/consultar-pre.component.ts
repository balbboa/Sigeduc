import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-pre',
  templateUrl: './consultar-pre.component.html',
  styleUrls: ['./consultar-pre.component.scss']
})
export class ConsultarPreComponent implements OnInit {

  constructor() {
    let divToChange = document.getElementById('navbar');
    divToChange.className = "navbar navbar-expand-lg customNav";
   }

  ngOnInit() {
  }

}
