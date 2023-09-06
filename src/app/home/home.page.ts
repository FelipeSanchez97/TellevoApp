import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController ) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }
ngOnInit() {
  }
  

async ingresar() {
  var f = this.formularioLogin.value;

  // Obtener todas las cuentas almacenadas
  var cuentasString = localStorage.getItem('cuentas');
var cuentas: { nombre: string; password: string; }[] = cuentasString ? JSON.parse(cuentasString) : [];

  var usuarioValido = cuentas.find((cuentas) => cuentas.nombre === f.nombre && cuentas.password === f.password);

  if (usuarioValido) {
    console.log('Ingresado');
    localStorage.setItem('ingresado', 'true');
    this.navCtrl.navigateForward('/inicio');
  } else {
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Los datos que ingresaste son incorrectos',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
}

