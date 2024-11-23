import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./components/banner/banner.component";
import { NavComponent } from "./components/nav/nav.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./components/about/about.component";
import { CommentComponent } from "./components/comment/comment.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, NavComponent, ProjectsComponent, FooterComponent, AboutComponent, CommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Escuchar los cambios en el fragmento
    this.route.fragment.subscribe(fragment => {
      // Si el fragmento es válido, realizar el scroll a la sección
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          // Scroll suave hacia el elemento con el id
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  title = 'portafolioWeb';
}
