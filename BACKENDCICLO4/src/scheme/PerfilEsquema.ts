import { model, Schema } from "mongoose";
import { PerfilEntities } from "../entities/PerfilEntities";

const PerfilEsquema = new Schema<PerfilEntities>(
  {
    nombrePerfil: { type: String, required: true, unique: true, trim: true },
    estadoPerfil: { type: Number, enum: [1,2], default: 1}
  },
  { versionKey:false }
);



export default model("Perfil", PerfilEsquema, "Perfil");
