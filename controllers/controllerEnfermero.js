import Enfermero from "../models/Enfermero.js";

const registrarEnfermero = async (req, res) => {
  const duplicado = await Enfermero.findOne({ email: req.body.email });

  if (duplicado) {
    return res.status(404).json({ msg: "Ya existe este enfermero" });
  }
  try {
    const enfermero = new Enfermero(req.body);

    const nuevoEnfermero = await enfermero.save();

    res.json({ msg: "Registro correcto" });
  } catch (error) {
    res.json({ msg: error });
  }
};

const loginEnfermero = async () => {};

const listaEnfermeros = async (req, res) => {
  const enfermeros = await Enfermero.find();

  return res.json(enfermeros);
};

const editarEnfermero = async (req, res) => {
  const { id } = req.params;

  const enfermero = await Enfermero.findById(id);

  if (!enfermero) {
    const error = new Error("El enfermero no existe");
    return res.status(404).json({ msg: error });
  }

  enfermero.nombre = req.body.nombre || enfermero.nombre;
  enfermero.email = req.body.email || enfermero.email;
  enfermero.telefono = req.body.telefono || enfermero.telefono;

  try {
    const enfermeroActualizado = await enfermero.save();
    res.json(enfermeroActualizado);
  } catch (error) {
    console.log(error);
  }
};

const agregarPaciente = async () => {};

const eliminarPaciente = async () => {};

export {
  registrarEnfermero,
  loginEnfermero,
  listaEnfermeros,
  agregarPaciente,
  eliminarPaciente,
  editarEnfermero,
};
