import { Box, TextField, Typography, Paper } from "@mui/material";
import { Header } from "@/components/organisms/header";

export const GradesTemplate = ({ alunos, notas, editedNotas, onNotaChange }) => {
  return (
    <><Header />
    <Box className="grades-template">
      {alunos.map((aluno) => {
        const notaAtual = editedNotas[aluno.id] ?? notas[aluno.id] ?? "";
        return (
          <Paper key={aluno.id} className="grade-row" elevation={2}>
            <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
              <Typography variant="body1">{aluno.nome}</Typography>
              <TextField
                label="Nota"
                type="number"
                value={notaAtual}
                onChange={(e) => onNotaChange(aluno.id, e.target.value)}
                inputProps={{ min: 0, max: 10, step: 0.1 }}
                sx={{ width: "100px" }}
              />
            </Box>
          </Paper>
        );
      })}
    </Box>
    </>
  );
};
