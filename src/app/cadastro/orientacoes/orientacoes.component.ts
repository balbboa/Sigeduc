import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientacoes',
  templateUrl: './orientacoes.component.html',
  styleUrls: ['./orientacoes.component.scss']
})
export class OrientacoesComponent implements OnInit {

  constructor() { 
    let divToChange = document.getElementById('navbar');
    
    divToChange.className = "navbar navbar-expand-lg customNav";
  }

  ngOnInit() {
  }

}
