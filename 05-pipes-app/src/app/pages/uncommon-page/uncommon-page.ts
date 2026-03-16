import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Luis',
  gender: 'male',
  age: 32,
  address: '123 Main St',
}

const client2 = {
  name: 'Luz',
  gender: 'female',
  age: 27,
  address: '123 Main St',
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe,SlicePipe,JsonPipe,KeyValuePipe,AsyncPipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {
  // crear una signal para el cliente
  // i18nSelect funciona como un map, donde la clave es el valor de la propiedad
  // y el valor es lo que se muestra en la plantilla
  client = signal(client1);

  inivitationMap = {
    male : 'invitarlo',
    female : 'invitarla',
  }

  ChangeClient() {
    if (this.client() === client1) {
      this.client.set(client2)
      return;
    }
    this.client.set(client1)
 }

 // i18plural sirve para mostrar un mensaje diferente dependiendo del número de elementos en una lista
clientsMap = signal ({
  '=0': 'no tenemos ningún cliente esperando.',
  '=1': 'un cliente esperando.',
  '=2': 'dos clientes esperando.',
  other: 'tenemos # clientes esperando.',
})

  clients = signal(['Maria', 'Pedro', 'Juan']);

  deletClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  // keyvalue pipe sirve para mostrar las propiedades de un objeto en la plantilla
  profile = {
  name: 'Luis',
  age: 32,
  address: '123 Main St',
  }

  // async pipe sirve para mostrar el valor de una promesa en la plantilla
  promiseValue :  Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
      console.log('Tenemos data de promesa');
    }, 3500);
  })

  // async pipe también funciona con observables
  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap:', value))
  );
}
