import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { SubComponent } from './content/home/sub/sub.component';
import { TestComponent } from './content/test/test.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
    data: {
      displaySidemenu: false,
    }
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'sub', component: SubComponent,
      }
    ]
  },
  {
    path: 'test', component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
