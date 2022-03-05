import { Component } from '@angular/core';
import { NavItem, NavUser } from 'projects/ng-ui-frame/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workspace';

  navUser: NavUser = {
    profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    name: 'Some User',
    role: 'Engineer'
  }
  navList: NavItem[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: 'test'
    },
    {
      name: 'Home',
      icon: 'home',
      link: 'test'
    },
    {
      name: 'Settings',
      icon: 'settings',
      link: 'test'
    }
  ]
}
