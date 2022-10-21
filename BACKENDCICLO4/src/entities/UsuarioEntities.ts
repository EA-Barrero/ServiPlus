import { PerfilEntities } from "./PerfilEntities";

export class UsuarioEntities {
  public nombreUsuario: string;
  public correoUsuario: string;
  public claveUsuario: string;
  public fechaRegistroUsuario: Date;
  public estadoUsuario: number;
  public codPerfil: PerfilEntities;

  constructor(
    nom: string,
    est: number,
    cor: string,
    cla: string,
    fec: Date,
    cod: PerfilEntities
  ) {
    this.nombreUsuario = nom;
    this.correoUsuario = cor;
    this.claveUsuario = cla;
    this.fechaRegistroUsuario = fec;
    this.estadoUsuario = est;
    this.codPerfil = cod;
  }
}

export default UsuarioEntities;
