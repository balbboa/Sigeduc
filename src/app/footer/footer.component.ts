import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  netImage3:any = '../assets/prefeitura-santana.png';
  netImage4:any = '../assets/macapa.png';
  netImage5:any = '../assets/brasao-do-amapa.png';

  constructor() { }

  ngOnInit() {
  }

}
