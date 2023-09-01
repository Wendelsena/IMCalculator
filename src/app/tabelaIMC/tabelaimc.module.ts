import { NgModule } from "@angular/core";
import { TabelaComponent } from "./dados-tabela/tabela.component"; //vai pegar o tabelacomponent e se comunicar com o modulo pai

@NgModule({
    //vetores
    declarations: [TabelaComponent],
    exports: [TabelaComponent],
    imports: []
})

export class TabelaIMCmodule{

}