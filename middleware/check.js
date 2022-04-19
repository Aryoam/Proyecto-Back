import jwt from "jsonwebtoken";
import Administrador from "../models/Administrador.js";

const check = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.KEY_JWT);

      console.log(decoded);

      req.enfermero = await Administrador.findById(decoded.id).select(
        "-password -createdAt -updateAt"
      );

      return next();
    } catch (error) {
      return res.status(404).json({ msg: "error" });
    }
  }

  if (!token) {
    res.status(404).json({ msg: "No hay token" });
  }
};

export default check;
