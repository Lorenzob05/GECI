import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header-without-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header-without-login.component.html',
  styleUrl: './header-without-login.component.css'
})
export class HeaderWithoutLoginComponent {

}
