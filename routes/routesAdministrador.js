import express from "express";
import {
  registrarAdministrador,
  autenticacion,
  perfil,
  obtenerPaciente,
  home,
} from "../controllers/controllerAdministrador.js";
import check from "../middleware/check.js";

const router = express.Router();

router.post("/registro", registrarAdministrador);
router.post("/login", autenticacion);

router.route("/").get(check, obtenerPaciente);

router.get("/perfil", check, perfil);

export default router;
