import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// Bienvenido sea mi listado de paginas.
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CountPage } from '../pages/count/count';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyserviceProvider } from '../providers/myservice/myservice';
import { HttpClientModule, HttpClient } from '../../node_modules/@angular/common/http';
import { OtherServiceProvider } from '../providers/other-service/other-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CountPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CountPage
  ],
  providers: [
    StatusBar,
    HttpClient,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyserviceProvider,
    OtherServiceProvider
  ]
})
export class AppModule {}
