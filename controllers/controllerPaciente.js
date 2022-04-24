import Paciente from "../models/Paciente.js";
import Administrador from "../models/Administrador.js";

const registrarPaciente = async (req, res) => {
  const pacienteDuplicado = await Paciente.findOne({
    telefono: req.body.telefono,
  });

  if (pacienteDuplicado) {
    return res.status(404).json({ msg: "Este paciente ya esta dado de alta" });
  }

  try {
    const paciente = new Paciente(req.body);
    const nuevoPaciente = await paciente.save();
    res.json({ msg: "El paciente se dio de alta con exito" });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

const listaPacientes = async (req, res) => {
  const pacientes = await Paciente.find();
  res.json(pacientes);
};

const editarPaciente = async (req, res) => {
  const { id } = req.params;

  const paciente = await Paciente.findById(id);

  if (!paciente) {
    const error = new Error("El paciente no existe");
    return res.status(404).json({ msg: error });
  }

  res.json(paciente);
};

const listaPendientes = async (req, res) => {
  const { id } = req.params;

  const pendiente = await Paciente.findById(id).populate("pendiente");

  res.json(pendiente);
};

export { registrarPaciente, editarPaciente, listaPendientes, listaPacientes };
