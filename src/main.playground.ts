import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { PlaygroundModule } from 'angular-playground';
import { MatCardModule } from '@angular/material/card';

PlaygroundModule
  .configure({
    selector : 'app-root',
    overlay: false,
    modules: [
      MatCardModule
    ],
  });

@Component({
  selector: 'playground-app',
  template: '<playground-root></playground-root>'
})
export class AppComponent {}

@NgModule({
  imports: [
    BrowserModule,
    PlaygroundModule,
    MatCardModule

  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
