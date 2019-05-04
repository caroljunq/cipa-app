import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/firebase/authentication.service';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  authentication = true;
  public appPages = [
    {
      title: 'Perfil',
      url: '/profile',
      icon: 'contact'
    },
    // {
    //   title: 'Atendimentos',
    //   url: '/cases',
    //   icon: 'medical'
    // },
    {
      title: 'Referências',
      url: '/ref',
      icon: 'book'
    },
    {
      title: 'Criação e Apoio',
      url: '/support',
      icon: 'thumbs-up'
    },
    {
      title: 'Como Usar',
      url: '/how-to-use',
      icon: 'help'
    }
  ];
  public currentUser: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    private db: AngularFirestore,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.splashScreen.show();
  }

  initializeApp() {
      this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      // this.splashScreen.hide();

      const aux = this.authService;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('usuario logado '); 
            aux.authenticationState.next(true);
        } else {
            console.log('usuario deslogado');
            aux.authenticationState.next(false);
        }
    });
      this.authService.authenticationState.subscribe(state => {
          //this.authentication = state;
          if (state) {
              this.router.navigate(['home']);
              this.currentUser = this.authService.UserInfo()
              console.log(this.currentUser);


          } else {
              this.router.navigate(['login']);
          }
          this.splashScreen.hide();
      });
    });
  }

  SignOut() {
    const router = this.router;
    this.authService.Logout()
      .then(function(res) {
        console.log(res);
        router.navigateByUrl('/login');
      }).catch(function(err) {
        console.log(err);

      });
  }
}
