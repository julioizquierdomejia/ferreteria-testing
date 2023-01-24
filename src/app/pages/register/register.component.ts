import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { FerreteriaService } from 'src/app/services/ferreteria.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  forRegister!:FormGroup;

  constructor( private ferreteriaServices:FerreteriaService ){

    this.forRegister = new FormGroup({
      producto : new FormControl(),
      costo : new FormControl(),
      foto : new FormControl(),
    })

  }

  async onSubmit(){
    console.log(this.forRegister.value);
    console.log('------------------------------------')
    const response = this.ferreteriaServices.addProducto(this.forRegister.value)
    console.log(response)
  }
  

}
