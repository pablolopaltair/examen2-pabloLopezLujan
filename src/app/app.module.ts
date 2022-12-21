import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importación de clases necesarias para trabajar con firebase app.module.ts
import { AngularFireModule } from   '@angular/fire/compat';
import { AngularFireAuthModule } from   '@angular/fire/compat/auth';
import { AngularFirestoreModule } from   '@angular/fire/compat/firestore';

//Importación de la configuración de firebase
import { environment } from 'src/environments/environment';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { EditarComponent } from './componentes/editar/editar.component';

//Importación del Form Builder
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Importación del Modulo de busqueda
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
