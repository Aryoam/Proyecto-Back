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
      type: String,
      default: new Date().toISOString().split("T")[0],
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
    historial: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Historial",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Paciente = mongoose.model("Paciente", schemaPaciente);

export default Paciente;
