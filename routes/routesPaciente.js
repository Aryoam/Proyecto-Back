import express from "express";
import {
  registrarPaciente,
  editarPaciente,
  listaPendientes,
  listaPacientes,
  buscaPaciente,
  agregarHistorial,
  buscarHistorial,
  editarHistorial,
} from "../controllers/controllerPaciente.js";
import check from "../middleware/check.js";

const router = express.Router();

router.post("/registro", registrarPaciente);
router.put("/editar/:id", editarPaciente);
router.get("/", listaPacientes);
router.get("/:id", buscaPaciente);
router.put("/agregar-historial", agregarHistorial);
router.get("/buscar-historial/:id", buscarHistorial);
router.put("/editar-historia/:id", editarHistorial);
router.get("/pendientes/:id", listaPendientes);

export default router;
