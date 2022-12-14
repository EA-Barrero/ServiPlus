import {connect} from "mongoose";

const ConexionDB =()=>{
    const urlConexion=String(process.env.DB_MONGO);
    connect(urlConexion)
    .then(()=>{
        console.log("conectados a la base de datos", process.env.DB_MONGO);
    })
    .catch((miError)=>{
        console.log("No se puede establecer conexión", miError);
    });
};

export default ConexionDB;