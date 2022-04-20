import express from "express";
import checkPacientes from "../middleware/checkPaciente.js";
import { registrarPaciente } from "../controllers/controllerPacientes.js";

const router = express.Router();

router.post("/registro", checkPacientes, registrarPaciente);

export default router;
