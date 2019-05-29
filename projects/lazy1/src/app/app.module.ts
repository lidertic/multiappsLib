//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LlistaComponent } from './llista/llista.component';
import { DetallComponent } from './detall/detall.component';

@NgModule({
  declarations: [AppComponent, LlistaComponent, DetallComponent],
  imports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
