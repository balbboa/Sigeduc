import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

  constructor() { 
    let divToChange = document.getElementById('navbar');
    divToChange.className = "navbar navbar-expand-lg fixed-top";
  }

  ngOnInit() {
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-scroll');
    } else {
      element.classList.remove('navbar-scroll');
    }
  }
}
