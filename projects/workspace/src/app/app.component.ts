import { Component } from '@angular/core';
import { FrameConfig, NavItem, NavUser, FrameEvents, FrameEvent } from 'projects/ng-ui-frame/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workspace';

  frameConfig: FrameConfig = {
    appName: 'Dummy App',
    // appNameShort: stringOfLength('DUMMY', 0, 6),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png'
  };
  navUser: NavUser = {
    profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    name: 'Some User',
    role: 'Engineer'
  }
  navList: NavItem[] = [
    {
      name: 'Home',
      icon: 'home',
      link: 'home'
    },
    {
      name: 'Test',
      icon: 'dashboard',
      link: 'test'
    },
    {
      name: 'Settings',
      icon: 'settings',
      link: 'anothertest'
    }
  ]

  onEvent(frameEvent: FrameEvent) {
    switch (frameEvent.type) {
      case FrameEvents.SETTINGS:
        console.log('Settings called, do something...');
        break;
      case FrameEvents.LOGOUT:
        console.log('Logout called, do something...');
        break;
      default:
        console.error(`unknown event fetched: ${JSON.stringify(event)}`);
        break;
    }
  }
}
