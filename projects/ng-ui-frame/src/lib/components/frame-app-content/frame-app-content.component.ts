import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frame-app-content',
  templateUrl: './frame-app-content.component.html',
  styleUrls: ['./frame-app-content.component.css'],
  host: {
    'class': 'frame-app-content',
  },
})
export class FrameAppContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
