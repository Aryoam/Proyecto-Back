import express from "express";
import {
  registrarPaciente,
  editarPaciente,
  listaPendientes,
  listaPacientes,
  buscaPaciente,
} from "../controllers/controllerPaciente.js";
import check from "../middleware/check.js";

const router = express.Router();

router.post("/registro", registrarPaciente);
router.put("/editar/:id", editarPaciente);
router.get("/", listaPacientes);
router.get("/:id", buscaPaciente);
router.get("/pendientes/:id", listaPendientes);

export default router;
