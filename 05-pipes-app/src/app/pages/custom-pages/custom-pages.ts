import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-pages',
  imports: [],
  templateUrl: './custom-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPages { }
