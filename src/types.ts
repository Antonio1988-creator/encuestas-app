export interface Encuesta {
  id: number;
  titulo: string;
  fecha: string; 
  estado: "borrador" | "publicada" | "cerrada";
}