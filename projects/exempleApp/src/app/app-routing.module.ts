import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'inicial', pathMatch: 'full' },
  { path: 'inicial', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  //imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
