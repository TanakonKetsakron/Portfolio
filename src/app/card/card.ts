import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly name = input('');
  readonly score = input(0);
  readonly selected = output<string>();

  select(): void {
    this.selected.emit(this.name());
  }
}
