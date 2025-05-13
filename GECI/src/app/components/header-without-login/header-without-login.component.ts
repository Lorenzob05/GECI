import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header-without-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-without-login.component.html',
  styleUrl: './header-without-login.component.css'
})
export class HeaderWithoutLoginComponent {

}
