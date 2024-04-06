import { Component } from '@angular/core';
import { TextMainHomeComponent } from '../text-main-home/text-main-home.component';
import { ListMainHomeComponent } from '../list-main-home/list-main-home.component';
import { HighlightMainHomeComponent } from '../highlight-main-home/highlight-main-home.component';

@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [TextMainHomeComponent,ListMainHomeComponent,HighlightMainHomeComponent],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {

}
