import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { NavItem, NavUser, FrameConfig, stringOfLength } from './ng-ui-frame.modules';
import { NgUiFrameService } from './ng-ui-frame.service';

@Component({
  selector: 'ng-ui-frame',
  templateUrl: './ng-ui-frame.component.html',
  styleUrls: ['./ng-ui-frame.component.scss'],
  host: {
    'class': 'ui-frame',
  },
})
export class NgUiFrameComponent implements OnInit {

  @Input() navUser: NavUser | undefined;
  @Input() navList: NavItem[] = [];
  @Input() frameConfig: FrameConfig = {
    appName: 'Dummy App',
    // appNameShort: stringOfLength('DUMMY', 0, 6),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png'
  };

  isClosed: boolean = true
  isActivePath: string = ''

  constructor(private frameService: NgUiFrameService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          return child
        })
      )
      .subscribe((ttl: ActivatedRoute | null) => {
        console.log(this.router.url)
        ttl?.url.subscribe(obj => {
          this.isActivePath = obj[0].path
        })
      });
  }

  toggleSidemenu() {
    this.frameService.isMenuClosed.emit(!this.isClosed)
    this.isClosed = !this.isClosed
  }

  isNavActive(name: string): boolean {
    return name === this.isActivePath
  }
  /*setNavActive(name: string) {
    this.isActiveNav = name
    console.log(name, this.isActiveNav)
  } */

}
