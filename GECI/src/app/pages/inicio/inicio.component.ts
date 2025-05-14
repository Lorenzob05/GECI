import { Component, HostListener, inject ,OnDestroy } from '@angular/core';
import { HeaderWithoutLoginComponent } from "../../components/header-without-login/header-without-login.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MatDialog } from '@angular/material/dialog';
import { ModalSsowebComponent } from '../../components/modal-ssoweb/modal-ssoweb.component';
import ModalCertComponent from '../../components/modal-cert/modal-cert.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderWithoutLoginComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  readonly dialog = inject(MatDialog);

    menuVisible = false;

    toggleMenu(): void {
      this.menuVisible = !this.menuVisible;
    }

    onSsoWeb(): void {
      console.log('Solicitudes clicked');
      this.dialog.open(ModalSsowebComponent);
    }

    onCert(): void {
      console.log('Solicitudes clicked');
     this.dialog.open(ModalCertComponent);
    }

  // Cerrar menu al clickar fuera
      @HostListener('document:click', ['$event'])
      handleClickOutside(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (!target.closest('.profile')) {
          this.menuVisible = false;
        }
      }
     

}
