import { Component, OnInit } from '@angular/core';

//Importación del Router
import { Router, ActivatedRoute } from '@angular/router';

//Importación de construcción de Formularios 
import { FormBuilder, FormGroup } from '@angular/forms';

//Importación del servicio
import { PorteroService } from '../../servicios/portero.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  //Iniciamos con el Formulario de edición de portero
  public editForm: FormGroup
  porteroRef: any
  constructor(
    public porteroService: PorteroService,
    public formBuilder: FormBuilder,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    //Añadimos los campos que vayamos a rellenar, y se inicializan en blanco
    this.editForm = this.formBuilder.group({
    nombre_completo: [''],
    ciudad:[''],
    telefono:[''],
    email:[''],
    mes_disponible:['']
    }) }


    //Recuerda los datos de cada campo y los introduce por defecto en el formulario
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.porteroService.getPorteroById(id).subscribe(res => {
      this.porteroRef = res;
      this.editForm = this.formBuilder.group({
        nombre_completo :[this.porteroRef.nombre_completo],
        ciudad: [this.porteroRef.ciudad],
        telefono: [this.porteroRef.telefono],
        email: [this.porteroRef.email],
        mes_disponible: [this.porteroRef.mes_disponible]
      })
    })
  }

  //Acción del botón de editar
  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.porteroService.updatePortero(this.editForm.value, id)
    this.router.navigate([''])
  }

}
