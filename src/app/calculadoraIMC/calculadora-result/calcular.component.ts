import { Component } from "@angular/core";

@Component ({
    selector: "calculadora-resultado",
    templateUrl: "./calcular.component.html",
    styleUrls: ["./calcular.component.css"]
})

export class CalcularIMCComponent{
    peso: number = 0;
    altura: number = 0;
    imc: number = 0;

    constructor(){}

    calcularIMC(): number{ 
       let imc = 0;
       let alt = this.altura;
       let pes = this.peso;

       this.imc = this.peso / (this.altura ** 2) //peso dividido pela altura ao quadrado
       alert(this.imc);

       return this.imc;
    }
}