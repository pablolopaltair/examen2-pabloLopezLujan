import { Component, OnInit } from '@angular/core';

//Importación del Router
import { Router } from '@angular/router';

//Importación del servicio de portero
import { PorteroService } from '../../servicios/portero.service';

//Importación de construcción de Formularios 
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearComponent implements OnInit { 

  //Iniciamos con el Formulario de creación de portero
public porteroForm : FormGroup

  constructor(
    public porteroService: PorteroService,
    public formbuilder: FormBuilder,
    public router: Router
  ) { 
    //Añadimos los campos que vayamos a rellenar, y se inicializan en blanco
    this.porteroForm = this.formbuilder.group({
    nombre_completo: [''],
    ciudad:[''],
    telefono:[''],
    email:[''],
    mes_disponible:['']
    })
  }

  ngOnInit(): void {
  }

  //Acción del botón de crear
  onSubmit() {
    this.porteroService.createPortero(this.porteroForm.value)
    this.router.navigate([''])
  }

 


  }

  


