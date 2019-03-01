import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/models/user';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import { ToastController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  user = {} as User;

  constructor(private authService: AuthenticationService,
              public toastController: ToastController,
              private router: Router,
              private menuCtrl: MenuController) {  }

  ngOnInit() {
      this.email = '';
      this.password = '';
      this.menuCtrl.enable(false);
  }

  async LogIn() {
    let loginStatus;
    let message;
    this.user.email = this.email;
    this.user.password = this.password;
    await this.authService.Login(this.user).then(function(res) {
        loginStatus = res;
    }).catch(function(err) {
        loginStatus = err.code;
    });
    console.log(loginStatus);
    switch (loginStatus) {
        case 'auth/invalid-email':
            message = 'E-mail inválido';
            break;
        case 'auth/user-disabled':
            message = 'Usuário desabilitado';
            break;
        case 'auth/user-not-found':
            message = 'Usuário não encontrado';
            break;
        case 'auth/wrong-password':
            message = 'Senha incorreta';
            break;
        default:
            message = 'Entrando...';
            setTimeout(() => {
              this.router.navigateByUrl('/home');
            }, 4000);
            break;
    }
    this.PresentToast(message, 4000);

  }

  async PresentToast(message, duration) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: 'dark'
    });
    toast.present();
  }

}
