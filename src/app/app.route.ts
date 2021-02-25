import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DirectMessagingComponent } from './chat/direct-messaging/direct-messaging.component';


export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    {
        path: 'app', component: ChatComponent,
        children: [
            // { path: 'channel/:channelId', component:  },
            { path: '', redirectTo: 'channel/general', pathMatch: 'full' },
            { path: 'directmessage', component: DirectMessagingComponent }
        ]
    },
]