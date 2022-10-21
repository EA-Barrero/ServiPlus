import { model, Schema, Types } from "mongoose";
import { UsuarioEntities } from "../entities/UsuarioEntities";

const UsuarioEsquema = new Schema<UsuarioEntities>(
  {
    nombreUsuario: { type: String, required: true, trim: true },
    correoUsuario: { type: String, required: true, unique: true, lowercase: true},
    claveUsuario: { type: String, required: true },
    fechaRegistroUsuario: { type: Date, default: Date.now() },
    estadoUsuario: { type: Number, enum: [1, 2], default: 1 },
    codPerfil: { type: Types.ObjectId, ref: "Perfil", required: true },
  },
  { versionKey: false }
);

export default model("Usuario", UsuarioEsquema, "Usuario");
