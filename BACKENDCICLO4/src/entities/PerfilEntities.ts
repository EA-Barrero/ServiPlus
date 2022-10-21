export class PerfilEntities{
    
    public nombrePerfil: string;
    public estadoPerfil: number;


    constructor(nom: string, est: number){
        this.estadoPerfil = est;
        this.nombrePerfil = nom;
    }
}

export default PerfilEntities;

