import express from "express";
import { registrarPaciente } from "../controllers/controllerPacientes.js";

const router = express.Router();

router.post("/registro", registrarPaciente);

export default router;
