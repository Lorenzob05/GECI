import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderWithoutLoginComponent } from "./components/header-without-login/header-without-login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderWithoutLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GECI';
}
