import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



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
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  resetPassword() {
    // Validar que los campos no estén vacíos y que la nueva contraseña sea igual a la confirmación.
    if (!this.username || !this.currentPassword || !this.newPassword) {
      console.error('Por favor, complete todos los campos.');
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.passwordsMatch = false; // Establece la variable de bandera en falso
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      console.error('Las contraseñas no coinciden. Verifica nuevamente.');
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.passwordsMatch = false; // Establece la variable de bandera en falso
      return;
    }
  }
}

    /* // Aquí debes enviar una solicitud al backend para restablecer la contraseña.
    // Esto puede implicar el uso de una API o un servicio web.

    const resetData = {
      username: this.username,
      newPassword: this.newPassword,
    };

    this.http.post('URL_DEL_BACKEND/reset-password', resetData).subscribe(
      (response) => {
        console.log('Solicitud de restablecimiento de contraseña enviada con éxito.');
        // Puedes redirigir al usuario a una página de confirmación o realizar otra acción necesaria.
      },
      (error) => {
        console.error('Error al enviar la solicitud de restablecimiento de contraseña:', error);
        // Maneja errores de acuerdo a tus necesidades.
      }
    );
  }
} */

