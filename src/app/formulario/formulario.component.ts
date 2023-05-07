import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  formData = new FormGroup({
              nombre :  new FormControl("", Validators.required),
              apellidos: new FormControl("", Validators.required),
              edad: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(150)]),
              dni: new FormControl("", [Validators.required, Validators.minLength(9),Validators.maxLength(9)]),
              mail: new FormControl("", [Validators.required, Validators.email]),
              password : new FormControl("", [Validators.required, Validators.minLength(6)]),
              repitPassword : new FormControl("", [Validators.required, Validators.minLength(6)]),
})

  onSubmit():void{
    console.log("Llegue")
    console.log(this.formData.value)
  }
}
