import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';



//Importación del Servicio
import { PorteroService } from 'src/app/servicios/portero.service';

//Importación del Modelo
import { Portero } from '../../modelos/portero.model';





@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
  
})
export class MostrarComponent implements OnInit {
  //Configuración de busqueda
  searchText:any;
  //Array de Portero
  Porteros : Portero[]

  constructor(private porteroService : PorteroService) { }

  //Listará los datos de Porteros
  ngOnInit(): void {
    this.porteroService.getPorteros().subscribe((res) => {
        this.Porteros = res.map((e)=>{
          return{
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Portero)
          }
        })
      }
    )
  }

  search(){

  }
  //Borrará el portero seleccionado (Se hace en este componente ya que no es necesario
  //crear un nuevo componente para el borrado)
  deleteRow = (portero) => this.porteroService.deletePortero(portero);

}
