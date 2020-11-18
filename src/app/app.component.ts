import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  timoutId: number;
  listToExecute: number[] = [];

  msg = "Waiting click";
  cliquesAcumulados = 0;
  dadoParaProcessar = 0;

  executar() {
    this.cliquesAcumulados++;
    this.dadoParaProcessar++;
    this.msg = `${this.cliquesAcumulados} accumulated clicks`;
    this.update([this.dadoParaProcessar]);
  }

  update(list: number[]) {
    if (this.timoutId) {
      clearTimeout(this.timoutId);
    }

    this.listToExecute.push(...list);

    this.timoutId = setTimeout(() => {
      console.log(this.listToExecute);

      this.msg = `Executed ${this.listToExecute}`;

      this.listToExecute = [];
      this.cliquesAcumulados = 0;
    }, 900);
  }
}
