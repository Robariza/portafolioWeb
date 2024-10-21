import { Component } from '@angular/core';
import { CarrouselAboutComponent } from "../carrousel-about/carrousel-about.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CarrouselAboutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
