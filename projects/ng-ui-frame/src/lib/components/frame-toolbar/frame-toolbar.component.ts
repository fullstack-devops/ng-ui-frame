import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frame-toolbar',
  templateUrl: './frame-toolbar.component.html',
  styleUrls: ['./frame-toolbar.component.css'],
  host: {
    'class': 'frame-toolbar',
  },
})
export class FrameToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
