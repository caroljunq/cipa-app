import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  oldPassword: string; 
  newPassword: string; 
  cfmPassword: string; 

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  changePassword() {
      console.log(this.oldPassword, this.newPassword, this.cfmPassword); 

      if(this.oldPassword == undefined || this.newPassword == undefined || this.cfmPassword == undefined) {
          this.PresentToast('Preencha todos os campos!', 2000); 
      } else if(this.newPassword != this.cfmPassword) {
          this.PresentToast('As senhas não são iguais', 3000); 
      } else {
          // Confirmar se a senha antiga é a correta 
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
