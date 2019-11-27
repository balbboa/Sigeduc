import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprovante',
  templateUrl: './comprovante.component.html',
  styleUrls: ['./comprovante.component.scss']
})
export class ComprovanteComponent implements OnInit {
  netImage:any = '../assets/logo_sigeduc_small2.png';
  constructor() { }

  ngOnInit() {
  }

}
