import { Response } from "express";
import PerfilEsquema from "../scheme/PerfilEsquema";

class PerfilDao {
  protected static async obtenerPerfiles(res: Response): Promise<any> {
    const datos = await PerfilEsquema.find().sort({ _id: -1 });
    res.status(200).json(datos);
  }

  protected static async crearPerfil(
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilEsquema.findOne(parametros);
    if (existe) {
      res.status(400).json({ respuesta: "El perfil ya existe" });
    } else {
      const objPerfil = new PerfilEsquema(parametros);
      objPerfil.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede crear el perfil" });
        } else {
          res
            .status(200)
            .json({ respuesta: "Perfil creado", codigo: miObjeto._id });
        }
      });
    }
  }

  protected static async eliminarPerfil(
    parametro: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilEsquema.findById(parametro).exec();
    //console.log(existe);
    //console.log(parametro)
    if (existe) {
      PerfilEsquema.findByIdAndDelete(parametro, (miError: any, miObjeto: any) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede eliminar perfil" });
        } else {
          res
            .status(200)
            .json({
              respuesta: "Perfil eliminado",
              eliminado: miObjeto
            });
        }
      });
    } else {
      res.status(400).json({ respuesta: "No existe el perfil" });
    }
  }

  protected static async actualizarPerfil(codigo:string, 
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilEsquema.findById(codigo).exec();
    if (existe) {
      PerfilEsquema.findByIdAndUpdate(
        {_id: codigo},
        {$set: parametros},
         (miError: any, miObjeto: any) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede actualizar el perfil" });
        } else {
          res
            .status(200)
            .json({
              respuesta: "Perfil actualizado",
              antiguo: miObjeto,
              nuevo: parametros,
            });
        }
      });
    } else {
      res.status(400).json({ respuesta: "El perfil a actualizar no existe" });
    }
  } 
  
}

export default PerfilDao;
