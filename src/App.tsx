import React, { useEffect, useState } from "react";
import { Encuesta } from "./types";
import { EncuestasFilter } from "./components/EncuestasFilter";
import { EncuestasTable } from "./components/EncuestasTable";

function App() {
  const [encuestas, setEncuestas] = useState<Encuesta[]>([]);
  const [filtroEstado, setFiltroEstado] = useState<string>("todos");

  useEffect(() => {
    fetch("/encuestas.json")
      .then(res => res.json())
      .then(data => setEncuestas(data))
      .catch(err => {
        console.error("Error cargando encuestas:", err);
      });
  }, []);

  const encuestasFiltradas =
    filtroEstado === "todos"
      ? encuestas
      : encuestas.filter((e) => e.estado === filtroEstado);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Encuestas</h1>
      <EncuestasFilter estadoSeleccionado={filtroEstado} onChange={setFiltroEstado} />
      <EncuestasTable encuestas={encuestasFiltradas} />
    </div>
  );
}

export default App;
