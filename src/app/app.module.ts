import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { DisponibilidadmecanicosComponent } from './disponibilidadmecanicos/disponibilidadmecanicos.component';
import { HomeComponent } from './home/home.component';

import { MecanicoservicesService } from './services/mecanicoservices.service';

const routes: Route[] = [
  {path:"", component:HomeComponent},
  {path:"mecanicos", component:MecanicosComponent},
  {path:"disponibilidadmecanicos", component:DisponibilidadmecanicosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MecanicosComponent,
    DisponibilidadmecanicosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MecanicoservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
