import mongoose from "mongoose";

const schemaPendiente = mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    paciente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Paciente",
    },
  },
  {
    timestamps: true,
  }
);

const Pendiente = mongoose.model("Pendiente", schemaPendiente);

export default Pendiente;
