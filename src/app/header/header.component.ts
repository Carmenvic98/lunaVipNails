import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    var menu =document.getElementsByClassName("bar")[0];
    var nav =document.getElementsByClassName("navegador")[0]

    menu.addEventListener("click", function(){
      nav.classList.toggle('active') 
    })
  }

}
