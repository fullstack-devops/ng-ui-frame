import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { NgUiFrameService } from '../../ng-ui-frame.service';

@Component({
  selector: 'frame-app-content',
  templateUrl: './frame-app-content.component.html',
  styleUrls: ['./frame-app-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'frame-app-content',
  },
})
export class FrameAppContentComponent implements OnInit {

  @HostBinding('class') openedClass = '';

  constructor(private frameService: NgUiFrameService) {
    this.frameService.isMenuClosed.subscribe(bool => {
      if (bool) {
        this.openedClass = ""
      } else {
        this.openedClass = "opened"
      }
    })
  }

  ngOnInit() {
  }

}
