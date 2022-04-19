import Administrador from "../models/Administrador.js";
import jwtNuevo from "../helpers/jwtNuevo.js";

const registrarEnfermero = async (req, res) => {
  const duplicado = await Administrador.findOne({ email: req.body.email });

  if (duplicado) {
    return res.status(404).json({ msg: "Ya existe este enfermero" });
  }
  try {
    const enfermero = new Administrador(req.body);
    const nuevoEnfermero = await enfermero.save();
    res.json({ msg: "Registro correcto" });
  } catch (error) {
    res.json({ msg: error });
  }
};

const autenticacion = async (req, res) => {
  const enfermero = await Administrador.findOne({ email: req.body.email });

  if (!enfermero) {
    return res.status(404).json({ msg: "El usuario no existe" });
  }

  //comprobar contraseña
  if (await enfermero.checkPassword(req.body.password)) {
    res.json({
      _id: enfermero._id,
      nombre: enfermero.nombre,
      token: jwtNuevo(enfermero._id),
    });
  } else {
    return res.status(404).json({ msg: "La contraseña es incorrecta" });
  }
};

const home = async (req, res) => {
  const { enfermero } = req;

  res.json(enfermero);
};

export { registrarEnfermero, autenticacion, home };
