import mongoose from "mongoose";

const schemaPacientes = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    edad: {
      type: Number,
      required: true,
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
    foto: {
      required: true,
      type: String,
    },
    patologia: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Pacientes = mongoose.model("Pacientes", schemaPacientes);

export default Pacientes;
