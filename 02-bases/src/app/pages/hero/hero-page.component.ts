
import { UpperCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe],
})

export class HeroPageComponent {
name = signal ('Iroman');
age = signal (45);


//senal computalizada/Readonly
heroDescription = computed( () => {
  const description = `${this.name()} - ${this.age()}`;

  return description;
});

capitalizedName = computed (() => this.name().toUpperCase());

/*
getHeroDescription() {
return `${this.name()} - ${this.age()}`;
}
*/


changeHero() {
  // se usa set xq no depende de un valor anterior
this.name.set('Spidermancito');
this.age.set(22);
}


resetForm() {
this.name.set('Iroman');
this.age.set(45);
}

changeAge() {
this.age.set(60);
}

}
