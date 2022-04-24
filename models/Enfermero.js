import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schemaEnfermero = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    telefono: {
      type: Number,
      trim: true,
      unique: true,
    },
    foto: {
      type: String,
    },
    pacientes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Paciente",
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
);

schemaEnfermero.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const hash = await bcrypt.genSalt(7);
  this.password = await bcrypt.hash(this.password, hash);
});

// schemaEnfermero.methods.checkPassword = async function (passwordIngresado) {
//   return await bcrypt.compare(passwordIngresado, this.password);
// };
const Enfermero = mongoose.model("Enfermero", schemaEnfermero);

export default Enfermero;
