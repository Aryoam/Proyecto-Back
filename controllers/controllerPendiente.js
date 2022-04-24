import Paciente from "../models/Paciente.js";
import Pendiente from "../models/Pendiente.js";

const agregarPendiente = async (req, res) => {
  const { paciente } = req.body;

  const existePaciente = await Paciente.findById(paciente);

  if (!existePaciente) {
    const error = new Error("El paciente no existe");
    return res.status(404).json({ msg: error.message });
  }

  try {
    const pendienteAlmacenado = await Pendiente.create(req.body);
    res.json(pendienteAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const listaPendiente = async (req, res) => {
  const { id } = req.params;

  const pendiente = await Pendiente.findById(id).populate("paciente");

  res.json(pendiente);
};

const actualizarPendiente = async (req, res) => {
  const { id } = req.params;
  console.log("jfdj");

  const pendiente = await Pendiente.findById(id).populate("paciente");

  pendiente.nombre = req.body.nombre || pendiente.nombre;
  pendiente.descripcion = req.body.descripcion || pendiente.descripcion;
  pendiente.status = req.body.status || pendiente.status;

  try {
    const pendienteActualizado = await pendiente.save();

    res.json(pendienteActualizado);
  } catch (error) {
    console.log(error);
  }
};

const cambiarStatus = async (req, res) => {};

export { agregarPendiente, listaPendiente, actualizarPendiente, cambiarStatus };
