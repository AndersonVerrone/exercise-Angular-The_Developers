import { Component } from '@angular/core';

@Component({
  selector: 'app-main-contact',
  standalone: true,
  imports: [],
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.scss'
})
export class MainContactComponent {
  phone = "+55 41 3132-3132";
  email = "contact@thedevelopers.com";
}
