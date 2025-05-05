import { Component } from '@angular/core';
import { HeaderWithoutLoginComponent } from "../../components/header-without-login/header-without-login.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [HeaderWithoutLoginComponent, FooterComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

}
