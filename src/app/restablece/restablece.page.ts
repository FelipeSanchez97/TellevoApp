import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-restablece',
  templateUrl: './restablece.page.html',
  styleUrls: ['./restablece.page.scss'],
})
export class RestablecePage implements OnInit {
  username: string = '';
  currentPassword: string = '';
  confirmPassword: string = '';
  newPassword: string = '';
  passwordsMatch: boolean = true;
  

  constructor(private http: HttpClient, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  resetPassword() {
    // Validar que los campos no estén vacíos y que la nueva contraseña sea igual a la confirmación.
    if (!this.username || !this.currentPassword || !this.newPassword || !this.confirmPassword) {
      this.presentAlert('Datos incompletos', 'Por favor, complete todos los campos.');
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.passwordsMatch = false;
      this.presentAlert('Contraseñas no coinciden', 'Las contraseñas no coinciden. Verifica nuevamente.'); // Establece la variable de bandera en falso
      return;
    }
    this.router.navigate(['/home']);
    
  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });
  
    await alert.present();
}
}

    
