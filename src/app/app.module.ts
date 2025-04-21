import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SidenavComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
