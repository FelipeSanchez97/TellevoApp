import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController ) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)

    });
  }

  ngOnInit() {
  }
  async guardar() {
    var f = this.formularioRegistro.value;
  
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes completar todos los datos',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }
  
    var nuevaCuenta = {
      nombre: f.nombre,
      password: f.password,
    };
  
    // Obtener cuentas existentes del almacenamiento local
    var cuentasString = localStorage.getItem('cuentas');
var cuentas: { nombre: string; password: string; }[] = [];

if (cuentasString !== null) {
  cuentas = JSON.parse(cuentasString);
}
  
    // Agregar la nueva cuenta al arreglo de cuentas
    cuentas.push(nuevaCuenta);
  
    // Guardar el arreglo actualizado en el almacenamiento local
    localStorage.setItem('cuentas', JSON.stringify(cuentas));
  
    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: 'La cuenta ha sido registrada correctamente',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.navigateForward('/home'); // Redirigir al usuario al login
        },
      },
    ],
    });
    await alert.present();
  }
}
