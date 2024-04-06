import { Component } from '@angular/core';
import { CardMainHomeComponent } from '../card-main-home/card-main-home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-main-home',
  standalone: true,
  imports: [CommonModule,CardMainHomeComponent],
  templateUrl: './list-main-home.component.html',
  styleUrl: './list-main-home.component.scss'
})
export class ListMainHomeComponent {
  userList = [
    {
      img:"../../../assets/foto1.svg",
      alt:"foto de perfil",
      name:"Josefina",
      description:"Lorem ipsum dolor sit amet"
    },
    {
      img:"../../../assets/foto2.svg",
      alt:"foto de perfil",
      name:"Rudolf",
      description:"Lorem ipsum dolor sit amet"
    },
    {
      img:"../../../assets/foto3.svg",
      alt:"foto de perfil",
      name:"Lucy",
      description:"Lorem ipsum dolor sit amet"
    },
    {
      img:"../../../assets/foto4.svg",
      alt:"foto de perfil",
      name:"Robert",
      description:"Lorem ipsum dolor sit amet"
    },
  ]
}
