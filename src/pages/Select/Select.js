import * as React from "react";
import { Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Select.css";

// Dados das linguagens de programação
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
  { id: 12, nome: "Dart" },
];

export default function BasicSelect() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleNavigate = () => {
    if (selectedLanguage) {
      const selected = linguagens.find(
        (lang) => lang.nome === selectedLanguage
      );
      if (selected) {
        navigate(`/info/${selected.id}`);
      }
    }
  };

  return (
    <Row className="container">
      <Row className="box-select">
        <Box sx={{ minWidth: 400 }}>
          <FormControl fullWidth style={{ color: "white" }}>
            <Select
              style={{
                color: "white",
                border: "1px solid white",
                borderRadius: "25px",
              }}
              id="demo-simple-select"
              value={selectedLanguage}
              onChange={handleChange}
              label="selecione"
              displayEmpty
              >
                <MenuItem value="" disabled>
                  Selecione uma linguagem
                </MenuItem>
              {linguagens.map((lang) => (
                <MenuItem key={lang.id} value={lang.nome}>
                  {lang.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          onClick={handleNavigate}
          style={{ marginTop: "25px", color: "white", backgroundColor: "grey" }}
        >
          Ir para Informações
        </Button>
      </Row>
    </Row>
  );
}
