import { Component } from '@angular/core';
import { FrameConfig } from 'projects/ng-ui-frame/src/public-api';
import { NavItem, NavUser } from 'projects/ng-ui-frame/src/public-api';

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
}
