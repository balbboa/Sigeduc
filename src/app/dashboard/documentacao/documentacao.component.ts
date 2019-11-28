import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentacao',
  templateUrl: './documentacao.component.html',
  styleUrls: ['./documentacao.component.scss']
})
export class DocumentacaoComponent implements OnInit {
  netImage:any = '../assets/student.svg';
  netImage2:any = '../assets/parents.svg';
  constructor() { }

  ngOnInit() {
  }

}
