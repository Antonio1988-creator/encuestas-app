import React from "react";
import { Encuesta } from "../types";

interface Props {
  encuestas: Encuesta[];
}

export const EncuestasTable: React.FC<Props> = ({ encuestas }) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2 text-left">ID</th>
          <th className="border px-4 py-2 text-left">Título</th>
          <th className="border px-4 py-2 text-left">Fecha</th>
          <th className="border px-4 py-2 text-left">Estado</th>
        </tr>
      </thead>
      <tbody>
        {encuestas.map(({ id, titulo, fecha, estado }) => (
          <tr key={id} className="hover:bg-gray-50">
            <td className="border px-4 py-2">{id}</td>
            <td className="border px-4 py-2">{titulo}</td>
            <td className="border px-4 py-2">{fecha}</td>
            <td className="border px-4 py-2 capitalize">{estado}</td>
          </tr>
        ))}
        {encuestas.length === 0 && (
          <tr>
            <td colSpan={4} className="text-center py-4 text-gray-500">
              No hay encuestas para mostrar.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};