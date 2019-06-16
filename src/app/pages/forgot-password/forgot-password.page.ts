import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string = ''; 

  constructor(private fbService: AuthenticationService,
              private toastController: ToastController, 
              private route: Router) { }

  ngOnInit() {
  }

  SendEmail() {
      if(this.email == ''){
        this.PresentToast('Digite um email', 3000);
      } else {
        this.fbService.SendPasswordResetEmail(this.email)
        .then(res => {
            this.PresentToast(res, 2000);
            setTimeout(() => {
                this.route.navigate(['/login']);
            }, 2200);
        }).catch(err => {
            this.PresentToast(this.SelectBetterMessage(err.code), 3000);
        });
      }
     
  }

  SelectBetterMessage(message){
      switch (message) {
          case 'auth/invalid-email':
            return 'Email inválido';
          case 'auth/missing-android-pkg-name':
            return message;
          case 'auth/missing-continue-uri':
            return message;
          case 'auth/missing-ios-bundle-id':
            return message;
          case 'auth/invalid-continue-uri':
            return message;
          case 'auth/unauthorized-continue-uri':
            return message;
          case 'auth/user-not-found':
            return 'Usuário não encontrado!';
          default: 
            return message;
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
