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
    switch (loginStatus) {
        case 'auth/invalid-email':
            message = 'E-mail inválido';
            this.PresentToast(message, 4000);
            break;
        case 'auth/user-disabled':
            message = 'Usuário desabilitado';
            this.PresentToast(message, 4000);
            break;
        case 'auth/user-not-found':
            message = 'Usuário não encontrado';
            this.PresentToast(message, 4000);
            break;
        case 'auth/wrong-password':
            message = 'Senha incorreta';
            this.PresentToast(message, 4000);
            break;
        case 'user-email-not-verified':
            this.authService.SimpleLogout();
            message = 'E-mail não verificado, por favor cheque sua caixa de e-mails';
            this.PresentToast(message, 4000);
            break;
        default:
            break;
    }
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
