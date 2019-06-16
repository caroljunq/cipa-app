import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Local Storage
import { IonicStorageModule } from '@ionic/storage';

// Firebase imports
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';


// Services
import { ContentService } from './services/content/content.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { AuthGuardService } from './services/firebase/auth-guard.service';
import { FirestoreSettingsToken } from '@angular/fire/firestore';

import { Network } from '@ionic-native/network/ngx';

import { SelectSearchbarPageModule } from './pages/select-searchbar/select-searchbar.module'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicStorageModule.forRoot(), 
    AngularFirestoreModule.enablePersistence(),
    SelectSearchbarPageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    ContentService,
    AuthGuardService, 
    AngularFirestore,
    Network
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
