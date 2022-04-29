import mongoose from "mongoose";

const schemaHistorial = mongoose.Schema(
  {
    paciente: {
      type: String,
      trim: true,
    },
    temperatura: {
      type: Number,
      trim: true,
    },
    comida: {
      type: String,
      trim: true,
    },
    higiene: {
      type: Boolean,
    },
    postura: {
      type: String,
      trim: true,
    },
    cardiaca: {
      type: Number,
      trim: true,
    },
    respiratoria: {
      type: Number,
      trim: true,
    },
    oxigeno: {
      type: Number,
      trim: true,
    },
    arterial: {
      type: Number,
      trim: true,
    },
    medicacion: {
      type: String,
      trim: true,
    },
    wc: {
      type: Boolean,
    },
    cuidados: {
      type: String,
      trim: true,
    },
    apariencia: {
      type: String,
      trim: true,
    },
    actitud: {
      type: Number,
      trim: true,
    },
    urgente: {
      type: String,
      trim: true,
    },
    nota: {
      type: String,
      trim: true,
    },
    fecha: {
      type: String,
      default: new Date().toISOString().split("T")[0],
    },
  },
  {
    timestamps: true,
  }
);

const Historial = mongoose.model("Historial", schemaHistorial);

export default Historial;
