import { Router } from "express";
import perfilControlador from "../controller/PerfilControlador";

class PerfilRuta {
  public rutaApiPerfil: Router;

  constructor() {
    this.rutaApiPerfil = Router();
    this.configuracion();
  }

  public configuracion(): void {
    this.rutaApiPerfil.get("/todos", perfilControlador.consulta);
    this.rutaApiPerfil.post("/nuevo", perfilControlador.crear);
    this.rutaApiPerfil.delete("/eliminar/:codigo", perfilControlador.eliminar);
    this.rutaApiPerfil.put("/actualizar/:codigo", perfilControlador.actualizar);
  }
}

const perfilRuta = new PerfilRuta();
export default perfilRuta.rutaApiPerfil;
