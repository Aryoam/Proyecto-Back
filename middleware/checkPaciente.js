import jwt from "jsonwebtoken";
import Pacientes from "../models/Pacientes.js";

const checkPaciente = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.KEY_JWT);

      console.log(decoded);

      return next();
    } catch (error) {
      return res.status(404).json({ msg: error });
    }
  }

  if (!token) return res.status(404).json({ msg: "no hay token" });
};

export default checkPaciente;
