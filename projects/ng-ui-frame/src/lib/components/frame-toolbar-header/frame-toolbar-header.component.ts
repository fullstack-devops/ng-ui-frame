import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frame-toolbar-header',
  templateUrl: './frame-toolbar-header.component.html',
  styleUrls: ['./frame-toolbar-header.component.css'],
  host: {
    'class': 'frame-toolbar-header',
  },
})
export class FrameToolbarHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
