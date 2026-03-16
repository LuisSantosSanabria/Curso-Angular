import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumberPage {
  totalSells = signal(1_234_567.4321)
  percent = signal(0.1234)
 }
