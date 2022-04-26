import Paciente from "../models/Paciente.js";
import Administrador from "../models/Administrador.js";
import Enfermero from "../models/Enfermero.js";

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

const buscaPaciente = async (req, res) => {
  const { id } = req.params;

  const paciente = await Paciente.findById(id).populate("enfermero");
  res.json(paciente);

  if (!paciente) {
    const error = new Error("El paciente no existe");
    return res.status(404).json({ msg: error });
  }
};

const editarPaciente = async (req, res) => {
  const { id } = req.params;

  const paciente = await Paciente.findById(id).populate("enfermero");
  console.log(paciente);

  if (!paciente) {
    const error = new Error("El paciente no existe");
    return res.status(404).json({ msg: error });
  }
  paciente.nombre = req.body.nombre || paciente.nombre;
  paciente.email = req.body.email || paciente.email;
  paciente.telefono = req.body.telefono || paciente.telefono;
  paciente.foto = req.body.foto || paciente.foto;
  paciente.enfermero = req.body.enfermero || paciente.enfermero;
  paciente.sexo = req.body.sexo || paciente.sexo;
  paciente.peso = req.body.peso || paciente.peso;
  paciente.patologia = req.body.patologia || paciente.patologia;

  try {
    const pacienteActualizado = await paciente.save();
    res.json(pacienteActualizado);
  } catch (error) {
    console.log(error);
  }
};

const listaPendientes = async (req, res) => {
  const { id } = req.params;

  const pendiente = await Paciente.findById(id).populate("pendiente");

  res.json(pendiente);
};

export {
  registrarPaciente,
  editarPaciente,
  listaPendientes,
  listaPacientes,
  buscaPaciente,
};
