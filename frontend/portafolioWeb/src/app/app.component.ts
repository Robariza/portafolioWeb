import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./components/banner/banner.component";
import { NavComponent } from "./components/nav/nav.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./components/about/about.component";
import { CommentComponent } from "./components/comment/comment.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, NavComponent, ProjectsComponent, FooterComponent, AboutComponent, CommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolioWeb';
}
