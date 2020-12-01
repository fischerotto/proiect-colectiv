import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutComponent} from './layout/layout.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { HeaderComponent} from './navigation/header/header.component';
import { SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RoutingModule } from './routing/routing.module';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { store, State} from './store';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RoutingModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<State>) {
    ngRedux.provideStore(store);
  }
}
