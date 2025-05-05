import { Component } from '@angular/core';
import { HeaderWithoutLoginComponent } from "../../components/header-without-login/header-without-login.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderWithoutLoginComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
