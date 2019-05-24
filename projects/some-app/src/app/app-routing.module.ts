import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'lib',
    loadChildren: './lazy/some-lib-wrapper.module#SomeLibWrapperModule'
  },
  {
    path: 'lib1',
    loadChildren: './lazy/lib1-lib-wrapper.module#Lib1WrapperModule'
  },
  {
    path: 'lib-experimental',
    loadChildren: () => import('@my-org/some-lib').then(m => m.SomeLibModule)
  },
  {
    path: 'libmeva-experimental',
    loadChildren: () => import('@masalbertwork/lib1').then(m => m.Lib1Module)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
