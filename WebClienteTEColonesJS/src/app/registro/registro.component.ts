import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [PostService]
})
export class RegistroComponent implements OnInit {
  sedes: IPost[];
  posts: IPost[];
  rolposts: IRol[];
  roles: IRol[];
  info: IInfo;
  constructor(private postService: PostService) {
    this.obtenerSedes();
    this.obtenerRoles();
  }

  obtenerSedes() {
    this.postService.getPosts('SedeXTECs').subscribe(posts => {
      this.sedes = posts;
    });
  }

  obtenerRoles() {
    this.postService.getPosts('TipoRols').subscribe(rolposts => {
      this.roles = rolposts;
    });
  }

  obtenerDatosForm() {
    this.info.nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    this.info.primerApellido = (<HTMLInputElement>document.getElementById('primerApellido')).value;
    this.info.segundoApellido = (<HTMLInputElement>document.getElementById('segundoApellido')).value;
    this.info.carnet = (<HTMLInputElement>document.getElementById('carnet')).value;
    this.info.correo = (<HTMLInputElement>document.getElementById('correo')).value;
    this.info.contrasena = (<HTMLInputElement>document.getElementById('contraseña')).value;
    this.info.telefono = (<HTMLInputElement>document.getElementById('telefono')).value;
   // this.info.sede = (<HTMLInputElement>document.getElementById('sede')).value;
   // this.info.sede = (<HTMLInputElement>document.getElementById('rol')).value;
  }




  ngOnInit() {
  }

}

interface IPost {
  IdSedeXTEC: number;
  NombreSedeXTEC: string;
  UbicacionSede: string;
}

interface IRol {
  NombreRol: string;
}

interface IInfo {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  carnet: string;
  correo: string;
  contrasena: string;
  telefono: string;
  sede: string;
  rol: string;

}
