import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ui-frame',
  templateUrl: './ng-ui-frame.component.html',
  styleUrls: ['./ng-ui-frame.component.scss']
})
export class NgUiFrameComponent implements OnInit {

  isClosed: boolean = true

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

}
