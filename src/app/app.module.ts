import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ApiModule } from './api/api.module';
import { UserComponent } from './view/user/user.component';
import { BlogComponent } from './view/blog/blog.component';
import { AddressComponent } from './view/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BlogComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // overwrite ApiModule here if you don't want to touch the generated files
    ApiModule.forRoot({rootUrl: environment.restBaseUrl}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
