import { Component, signal } from "@angular/core";

@Component({
  // necesitan una pieza que es el template
templateUrl : './counter-page.component.html',
styles: `
button {
  padding: 5px;
  margin: 5px 10px;
  width: 75px;
}
`,

})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);


  increment (value : number) {
    this.counter += value;
    //cuando el valor una signal depende del valor anterios de la signal no se usa set xq ignora
    this.counterSignal.update( (current) => current + value);
    //
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
