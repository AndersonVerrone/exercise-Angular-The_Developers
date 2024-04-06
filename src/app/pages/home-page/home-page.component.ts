import { Component } from '@angular/core';
import { MainHomeComponent } from '../../components/main-home/main-home.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MainHomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
