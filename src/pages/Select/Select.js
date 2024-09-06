import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const linguagens = [
  { id: 1, nome: "JavaScript" },
  { id: 2, nome: "Python" },
  { id: 3, nome: "Java" },
  { id: 4, nome: "C#" },
  { id: 5, nome: "Ruby" },
  { id: 6, nome: "PHP" },
  { id: 7, nome: "Go" },
  { id: 8, nome: "Swift" },
  { id: 9, nome: "Rust" },
  { id: 10, nome: "Kotlin" },
  { id: 11, nome: "TypeScript" },
  { id: 12, nome: "Scala" },
];

const Select = () => {
  const [selectedLinguagem, setSelectedLinguagem] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setSelectedLinguagem(e.target.value);
  };

  const handleNavigate = () => {
    if (selectedLinguagem) {
      navigate(`/info/${selectedLinguagem}`);
    }
  };

  return (
    <div>
      <h1>Selecione uma linguagem de programação</h1>
      <select value={selectedLinguagem} onChange={handleSelectChange}>
        <option value="">-- Escolha uma linguagem --</option>
        {linguagens.map((linguagem) => (
          <option key={linguagem.id} value={linguagem.id}>
            {linguagem.nome}
          </option>
        ))}
      </select>
      <button onClick={handleNavigate} disabled={!selectedLinguagem}>
        Ver Informações
      </button>
    </div>
  );
};

export default Select;
