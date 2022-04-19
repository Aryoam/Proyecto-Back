import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schemaAdministrador = mongoose.Schema(
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
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

schemaAdministrador.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const hash = await bcrypt.genSalt(7);
  this.password = await bcrypt.hash(this.password, hash);
});

schemaAdministrador.methods.checkPassword = async function (passwordIngresado) {
  return await bcrypt.compare(passwordIngresado, this.password);
};

const Administrador = mongoose.model("Administrador", schemaAdministrador);
export default Administrador;
