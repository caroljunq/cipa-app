import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.page.html',
  styleUrls: ['./new-case.page.scss'],
})
export class NewCasePage implements OnInit {

  id: string; 
  data: string;
  sex: string;
  notes: string;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
      this.PresentToast('Sugerimos utilizar nomes fictícios ou somente as iniciais dos nomes ao cadastrar os atendimentos',6000);
  }

  async PresentToast(message, duration) {
    console.log('teste');
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: 'dark', 
      position: 'middle',
      showCloseButton: true, 
      closeButtonText: 'X'
    });
    toast.present();
  }

  CreateNewCase(){
      console.log(this.id, this.data, this.sex, this.notes);
  }

}
