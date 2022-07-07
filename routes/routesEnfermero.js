import express from "express";
import {
  registrarEnfermero,
  loginEnfermero,
  listaEnfermeros,
  agregarPaciente,
  eliminarPaciente,
  editarEnfermero,
  aizon,
} from "../controllers/controllerEnfermero.js";
import check from "../middleware/check.js";

const router = express.Router();

router.post("/registro", registrarEnfermero);
router.post("/login", loginEnfermero);

router.get("/lista", listaEnfermeros);
router.get("/", aizon);
router.put("/editar/:id", editarEnfermero);

router.post("/agregar-paciente/:id", check, agregarPaciente);
router.post("/eliminar-paciente/:id", check, eliminarPaciente);

export default router;
