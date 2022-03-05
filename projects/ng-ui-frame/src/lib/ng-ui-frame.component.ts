import { Component, Input, OnInit } from '@angular/core';
import { NavItem, NavUser } from './ng-ui-frame.modules';

@Component({
  selector: 'ng-ui-frame',
  templateUrl: './ng-ui-frame.component.html',
  styleUrls: ['./ng-ui-frame.component.scss']
})
export class NgUiFrameComponent implements OnInit {

  @Input() navUser: NavUser | undefined;
  @Input() navList: NavItem[] = [];

  isClosed: boolean = true
  isActiveNav: string = ''

  

  constructor() { }

  ngOnInit(): void {
    /* let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
     let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
     arrowParent.classList.toggle("showMenu");
      });
    } */
  }

  isNavActive(name: string): boolean {
    console.log(name === this.isActiveNav)
    return name === this.isActiveNav
  }
  setNavActive(name: string) {
    this.isActiveNav = name
    console.log(name, this.isActiveNav)
  }

}
