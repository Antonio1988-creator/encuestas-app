import React from "react";

interface Props {
  estadoSeleccionado: string;
  onChange: (estado: string) => void;
}

const estados = ["todos", "borrador", "publicada", "cerrada"];

export const EncuestasFilter: React.FC<Props> = ({ estadoSeleccionado, onChange }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Filtrar por estado:</label>
      <select
        value={estadoSeleccionado}
        onChange={e => onChange(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {estados.map((estado) => (
          <option key={estado} value={estado}>
            {estado.charAt(0).toUpperCase() + estado.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};