import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importación de componentes (Mostrar, Editar y Crear)
import { CrearComponent } from './componentes/crear/crear.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';



//Configuración de las rutas (Edit tiene ruta hija según el ID)
const routes: Routes = [
  {path: '',component:MostrarComponent},
  {path: 'create',component:CrearComponent},
  {path: 'edit/:id',component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
