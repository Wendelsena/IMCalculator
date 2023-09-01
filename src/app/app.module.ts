//MODULO PAI. devemos adcionar aqui os modulos filhos

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaIMCmodule } from './tabelaIMC/tabelaimc.module';
import { calculadoraImcModule } from './calculadoraIMC/calculadoraIMC.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    calculadoraImcModule,
    BrowserModule,
    AppRoutingModule,
    TabelaIMCmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }    
