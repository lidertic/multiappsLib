# How to lazy load modules from Angular libraries

Run `ng build --project @my-org/some-lib` and then run `npm start` to see it in action!

Check out [live demo](https://tomastrajan.github.io/angular-lazy-lib-demo) and open
network tab of the developer console of your browser before navigation to the lib route
to see it being lazy loaded on navigation...

# Afegim via npm (lib) no present

# i Afegim Una APP sencera via:

    ng g application exempleApp

    ###
        //import { BrowserModule } from '@angular/platform-browser';

        import { NgModule } from '@angular/core';

        import { AppComponent } from './app.component';
        import { AppRoutingModule } from './app-routing.module';

        @NgModule({
        declarations: [AppComponent],
        imports: [
        AppRoutingModule
        //BrowserModule
        ],
        providers: [],
        bootstrap: [AppComponent]
        })
        export class AppModule {}

## treiem //import { BrowserModule } from '@angular/platform-browser';
