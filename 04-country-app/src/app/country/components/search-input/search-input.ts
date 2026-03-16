import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  placeholder = input('Buscar');
  debounceTime = input(1000);
// reicibir valor inicial
  initialValue = input<string>();
  value = output<string>();


  // este valor siempre va tener el ultimo valor q l persona escriba
  inputValue = linkedSignal<string>(() =>this.initialValue() ?? '');

  // emitir efecto
  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout (() => {
      this.value.emit(value);

    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout)});
  });
 }
