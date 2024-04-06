import { Component } from '@angular/core';
import { BannerContactComponent } from '../../components/banner-contact/banner-contact.component';
import { MainContactComponent } from '../../components/main-contact/main-contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [BannerContactComponent,MainContactComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
