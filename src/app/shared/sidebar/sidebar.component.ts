import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  usuario: Usuario;
  constructor(
    public sidebar: SidebarService,
    public usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
    this.sidebar.obtenerMenu();
  }
}
