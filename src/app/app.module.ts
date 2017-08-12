import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ComponentsModule } from '../components/components.module'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {
  MarvelAPI, MARVEL_API_CONFIG, MarvelAPIConfig
} from '../providers/comic/comic';

const APP_MARVEL_API_CONFIG: MarvelAPIConfig = {
  apiKey: '3c5c3610c2ea059d415c5aa609b3ea38',
  baseUrl: 'https://gateway.marvel.com',
  limit: 20,
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarvelAPI,
    {provide: MARVEL_API_CONFIG, useValue: APP_MARVEL_API_CONFIG},
  ]
})
export class AppModule {}
