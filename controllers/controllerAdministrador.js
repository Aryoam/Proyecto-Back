import Administrador from "../models/Administrador.js";
import jwtNuevo from "../helpers/jwtNuevo.js";
import Paciente from "../models/Paciente.js";

const perfil = async (req, res) => {
  const { administrador } = req;

  res.json(administrador);
};

const home = async () => {
  console.log("jdnfkjnfjr");
};

const registrarAdministrador = async (req, res) => {
  const duplicado = await Administrador.findOne({ email: req.body.email });

  if (duplicado) {
    return res.status(404).json({ msg: "Ya existe este administrador" });
  }
  try {
    const administrador = new Administrador(req.body);
    const nuevoAdministrador = await administrador.save();
    res.json({ msg: "Registro correcto" });
  } catch (error) {
    res.json({ msg: error });
  }
};

const obtenerPaciente = async (req, res) => {
  const enfermeros = await Administrador.find();

  res.json(enfermeros);
};

const autenticacion = async (req, res) => {
  const administrador = await Administrador.findOne({ email: req.body.email });

  if (!administrador) {
    return res.status(404).json({ msg: "El usuario no existe" });
  }

  //comprobar contraseña
  if (await administrador.checkPassword(req.body.password)) {
    res.json({
      _id: administrador._id,
      nombre: administrador.nombre,
      token: jwtNuevo(administrador._id),
      foto: administrador.foto,
      telefono: administrador.telefono,
      email: administrador.email,
    });
  } else {
    return res.status(404).json({ msg: "La contraseña es incorrecta" });
  }
};

export { registrarAdministrador, autenticacion, perfil, obtenerPaciente, home };
