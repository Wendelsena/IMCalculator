import { NgModule } from "@angular/core";
import { CalcularIMCComponent } from "./calculadora-result/calcular.component";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [CalcularIMCComponent],
    exports: [CalcularIMCComponent],
    imports: [FormsModule] // para trabalhar com formularios
})

export class calculadoraImcModule {
    
}