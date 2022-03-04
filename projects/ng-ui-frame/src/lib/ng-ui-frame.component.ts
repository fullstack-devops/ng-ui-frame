import { Component, OnInit } from '@angular/core';

export interface NavItem {
  name: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'ng-ui-frame',
  templateUrl: './ng-ui-frame.component.html',
  styleUrls: ['./ng-ui-frame.component.scss']
})
export class NgUiFrameComponent implements OnInit {

  isClosed: boolean = true
  isActiveNav: string = ''

  navlist: NavItem[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: 'test'
    },
    {
      name: 'Home',
      icon: 'home',
      link: 'test'
    },
    {
      name: 'Settings',
      icon: 'settings',
      link: 'test'
    }
  ]

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
