import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/firebase/authentication.service';
import { Router } from '@angular/router';

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
  ) {
    this.initializeApp();
    console.log('akjsajskas');
  }

  ngOnInit() {
    console.log('hello');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(state => {
          console.log(`estado do usuario ${state}`);
          //this.authentication = state;
          if (state) {
              this.router.navigate(['home']);
              this.currentUser = this.authService.UserInfo()
              console.log(this.currentUser);

          } else {
              this.router.navigate(['login']);
          }
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
