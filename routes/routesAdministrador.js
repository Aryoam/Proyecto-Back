import express from "express";
import {
  registrarEnfermero,
  autenticacion,
  home,
} from "../controllers/controllerAdministrador.js";
import check from "../middleware/check.js";

const router = express.Router();

router.post("/registro", registrarEnfermero);
router.post("/login", autenticacion);

router.get("/home", check, home);

export default router;
