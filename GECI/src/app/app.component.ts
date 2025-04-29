import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderWithoutLoginComponent } from "./components/header-without-login/header-without-login.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderWithoutLoginComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GECI';
}
