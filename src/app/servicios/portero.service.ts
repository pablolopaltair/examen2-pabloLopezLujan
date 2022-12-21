import { Injectable } from '@angular/core';

//Importación de Firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Importación del modelo Portero
import { Portero } from '../modelos/portero.model';


@Injectable({
  providedIn: 'root'
})
export class PorteroService {

  constructor(private angularFirestore : AngularFirestore) { }

  //CREACIÓN DE LOS MÉTODOS PARA EL CRUD DE PORTEROS


  //Getter de los porteors
  getPorteros(){
    return this.angularFirestore
    .collection("porteros")
    .snapshotChanges()
  }

  //Getter de porteros por ID
  getPorteroById(id){
    return this.angularFirestore
    .collection("porteros")
    .doc(id)
    .valueChanges()
  }


  //Creación de un nuevo portero
  createPortero (portero: Portero){
    return new Promise<any> ( ( resolve, reject)=>{
      this.angularFirestore
            .collection("porteros")
            .add(portero)
            .then( (response)=>{
              console.log(response)
            },
            (error)=>{
              reject(error)
            })

    })
  }


  //Editar-Actualizar los datos de portero
  updatePortero (portero: Portero, id){
    return this.angularFirestore
          .collection("porteros")
          .doc(id)
          .update({
            nombre_completo: portero.nombre_completo,
            ciudad: portero.ciudad,
            telefono: portero.telefono,
            email: portero.email,
            mes_disponible: portero.mes_disponible,
          });
  }


  //Eliminar portero
  deletePortero(portero){
    return this.angularFirestore
    .collection("porteros")
    .doc(portero.id)
    .delete();
  }

}
