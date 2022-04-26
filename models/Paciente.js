import mongoose from "mongoose";

const schemaPaciente = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    edad: {
      type: Number,
      required: true,
      trim: true,
    },
    sexo: {
      type: String,
      trim: true,
    },
    peso: {
      type: String,
      trim: true,
    },
    telefono: {
      type: Number,
      required: true,
      trim: true,
    },
    habitacion: {
      type: String,
      required: true,
    },
    fechaEntrada: {
      type: Date,
      default: Date.now(),
    },
    foto: {
      type: String,
    },
    patologia: {
      type: String,
    },
    enfermero: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enfermero",
    },
    pendiente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pendiente",
    },
  },
  {
    timestamps: true,
  }
);

const Paciente = mongoose.model("Paciente", schemaPaciente);

export default Paciente;
