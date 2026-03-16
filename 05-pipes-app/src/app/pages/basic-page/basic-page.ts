import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { avaliableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe
  ],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

// inyeccion de dependecias
localeService = inject(LocaleService);
currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('luis');
  nameUpper = signal('LUIS');
  fullName = signal('LuIS sAnTOs');

  customDate = signal(new Date());

  // mirar los cambios por segundo
  tickingDateEffect = effect ((onCleanup) => {
    const interval = setInterval (() => {
      this.customDate.set(new Date());
      console.log('tick');
    },1000);

    onCleanup(() => {
      clearInterval(interval);
    })
 });

 changeLocale(Locale: avaliableLocale) {
  this.localeService.changeLocale(Locale);
 }
}
