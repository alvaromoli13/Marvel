import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(public router: Router, public menuCtrl: MenuController) {}

  inicio(){
    this.router.navigate(['/tabs']);
    this.menuCtrl.close();
  }

  misPelis(){
    this.menuCtrl.close();
  }

  misPersonajes(){
    this.menuCtrl.close();
  }

  sesion(){
    this.router.navigate(['/login']);
    this.menuCtrl.close();
  }
  
}
