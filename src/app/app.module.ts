import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MachinesDashboardComponent } from './Components/machines-dashboard/machines-dashboard.component';
import { StatusBarComponent } from './Components/status-bar/status-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StatusGaugeComponent } from './Components/status-gauge/status-gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    MachinesDashboardComponent,
    StatusBarComponent,
    StatusGaugeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
