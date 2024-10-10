export default class Cl_Profesor {

    constructor(nombre,bono){

        this._nombre = nombre
        this._bono = bono

    }

    get nombre(){
        return this._nombre
    }

    get bono(){ 
        return this._bono
    }   

}