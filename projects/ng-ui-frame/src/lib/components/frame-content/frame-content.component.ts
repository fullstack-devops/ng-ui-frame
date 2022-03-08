import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { NgUiFrameService } from '../../ng-ui-frame.service';

@Component({
  selector: 'frame-content',
  templateUrl: './frame-content.component.html',
  styleUrls: ['./frame-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'frame-content',
  },
})
export class FrameContentComponent implements OnInit {

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
