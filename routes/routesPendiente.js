import express from "express";
import {
  agregarPendiente,
  listaPendiente,
  actualizarPendiente,
  cambiarStatus,
} from "../controllers/controllerPendiente.js";
import check from "../middleware/check.js";

const router = express.Router();

router.post("/registro", agregarPendiente);
router.get("/:id", listaPendiente);
router.put("/:id", actualizarPendiente);
router.post("/estatus/:id", cambiarStatus);

export default router;
