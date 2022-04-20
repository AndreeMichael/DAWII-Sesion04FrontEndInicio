import { Deporte } from "./deporte.model";

export class Modalidad {
    idModalidad?: number;
    nombre?:string;
    numHombres?:string;
    numMujeres?:string;
    edadMaxima?:number;
    edadMinima?:number;
    sede?:string;
    deporte?:Deporte    
}
