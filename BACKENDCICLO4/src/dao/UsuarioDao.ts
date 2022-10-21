import { Response } from "express";
import UsuarioEsquema from "../scheme/UsuarioEsquema";

class UsuarioDao {
  protected static async obtenerUsuarios(res: Response): Promise<any> {
    const datos = await UsuarioEsquema.find().sort({ _id: -1 });
    res.status(200).json(datos);
  }

  protected static async crearUsuario(
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await UsuarioEsquema.findOne(parametros);
    if (existe) {
      res.status(400).json({ respuesta: "El correo ya existe" });
    } else {
      const objUsuario = new UsuarioEsquema(parametros);
      objUsuario.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede crear el Usuario" });
        } else {
          res
            .status(200)
            .json({ respuesta: "Usuario creado", codigo: miObjeto._id });
        }
      });
    }
  }

  protected static async eliminarUsuario(
    parametro: any,
    res: Response
  ): Promise<any> {
    const existe = await UsuarioEsquema.findById(parametro).exec();
    //console.log(existe);
    //console.log(parametro)
    if (existe) {
      UsuarioEsquema.findByIdAndDelete(parametro, (miError: any, miObjeto: any) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede eliminar Usuario" });
        } else {
          res
            .status(200)
            .json({
              respuesta: "Usuario eliminado",
              eliminado: miObjeto,
            });
        }
      });
    } else {
      res.status(400).json({ respuesta: "No existe el Usuario" });
    }
  }

  protected static async actualizarUsuario(codigo:string, 
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await UsuarioEsquema.findById(codigo).exec();
    if (existe) {
      UsuarioEsquema.findByIdAndUpdate(
        {_id: codigo},
        {$set: parametros},
         (miError: any, miObjeto: any) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede actualizar el Usuario" });
        } else {
          res
            .status(200)
            .json({
              respuesta: "Usuario actualizado",
              antiguo: miObjeto,
              nuevo: parametros,
            });
        }
      });
    } else {
      res.status(400).json({ respuesta: "El Usuario a actualizar no existe" });
    }
  } 
  
}

export default UsuarioDao;