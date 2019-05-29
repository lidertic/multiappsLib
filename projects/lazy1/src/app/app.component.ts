import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LAZY1';

  rutaLlista = '/exemplelazy/llista';
  rutaDetall = '/exemplelazy/detall';

  constructor(private router: Router) {}

  ngOnInit() {
    const posicio = this.router.url.slice(1).indexOf('/');
    const rutaInicial = this.router.url.substring(0, posicio + 1);

    this.rutaLlista = rutaInicial + '/llista';
    this.rutaDetall = rutaInicial + '/detall';
    console.log(this.router.url);
  }
}
