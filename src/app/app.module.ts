import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './chat/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

import { APP_ROUTES } from './app.route';
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { DirectMessagingComponent } from './chat/direct-messaging/direct-messaging.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatComponent,
    DirectMessagingComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
