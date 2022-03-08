import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgUiFrameService } from '../../ng-ui-frame.service';

@Component({
  selector: 'frame-toolbar',
  templateUrl: './frame-toolbar.component.html',
  styleUrls: ['./frame-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'frame-toolbar',
  },
})
export class FrameToolbarComponent implements OnInit {
  @Input() menuOpened: boolean = false;

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

  ngOnDestroy() {
    this.frameService.isMenuClosed.unsubscribe()
  }

}
