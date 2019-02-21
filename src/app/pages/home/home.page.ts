import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router){}

  goToDefinition(){
    this.router.navigate(['/definition']);
  }

  goToInterventions(){
    this.router.navigate(['/interventions']);
  }

  goToDiagnostics(){
    this.router.navigate(['/diagnostics']);
  }

  goToRefs(){
    this.router.navigate(['/ref']);
  }
}
