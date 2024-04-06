import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-main-home',
  standalone: true,
  imports: [],
  templateUrl: './card-main-home.component.html',
  styleUrl: './card-main-home.component.scss'
})
export class CardMainHomeComponent {
  @Input() img!: string;
  @Input() alt!: string;
  @Input() name!: string;
  @Input() description!: string;
}
