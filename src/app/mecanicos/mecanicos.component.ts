import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mecanicos } from '../model/Mecanicos';
import { MecanicoservicesService } from '../services/mecanicoservices.service'

@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.css']
})
export class MecanicosComponent implements OnInit {

  form!: FormGroup;
  //form: FormGroup = new FormGroup({});

  mecanicos: Mecanicos = {
    documento: '',
    tipodocumento: '',
    primernombre: '',
    segundonombre: '',
    primerapellido: '',
    segundoapellido: '',
    celular: '',
    direccion: '',
    email: '',
    estado: ''
  };

  constructor(private formbuilder: FormBuilder, private mecanicoservices: MecanicoservicesService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      tipodocumento: ['', [Validators.required]],
      documento: ['', [Validators.required,Validators.pattern((/^-?[0-9][^\.]*$/))]],
      name: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      celular: ['', [Validators.required,Validators.pattern((/^-?[0-9][^\.]*$/))]],
      direccion: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      estado: ['', [Validators.required]],
    });
  } 

  reiniciar() {

    this.mecanicos = {
      tipodocumento: '',
      documento: '',
      primernombre: '',
      segundonombre: '',
      primerapellido: '',
      segundoapellido: '',
      celular: '',
      direccion: '',
      email: '',
      estado: ''
    }
    const value = this.form.value;
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      alert("Se Grabaran los datos diligenciados correctamente")
      this.mecanicoservices.insertMecanico(this.mecanicos)
        .subscribe(
          res => {
            console.log(res);
          },
          err => console.error(err)
        )
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get tipodocumentoField() {
    return this.form.get('tipodocumento');
  }

  get documentoField() {
    return this.form.get('documento');
  }

  get nameField() {
    return this.form.get('name');
  }

  get apellidoField() {
    return this.form.get('apellido');
  }

  get celularField() {
    return this.form.get('celular');
  }

  get direccionField() {
    return this.form.get('direccion');
  }

  get emailField() {
    return this.form.get('email');
  }

  get estadoField() {
    return this.form.get('estado');
  }

}

