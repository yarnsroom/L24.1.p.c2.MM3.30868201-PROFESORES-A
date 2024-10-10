import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_Contratado extends Cl_Profesor{
    constructor(nombre,bono,sueldo){
        super(nombre,bono)

            this.sueldo = sueldo
        }
        
        ingresoTotal(){
            return this.bono + this.sueldo
        }
    }
