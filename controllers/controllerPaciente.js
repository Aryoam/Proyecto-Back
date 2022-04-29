import Paciente from "../models/Paciente.js";
import Administrador from "../models/Administrador.js";
import Enfermero from "../models/Enfermero.js";
import Historial from "../models/Historial.js";

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
  paciente.historial = req.body.historial || paciente.historial;

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

const agregarHistorial = async (req, res) => {
  const { paciente } = req.body;

  const pacienteSeleccionado = await Paciente.findById(paciente);

  try {
    const historial = new Historial(req.body);
    const historialPaciente = await historial.save();
    pacienteSeleccionado.historial.push(historialPaciente._id);
    await pacienteSeleccionado.save();
    res.json({ msg: historialPaciente });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

const buscarHistorial = async (req, res) => {
  const { id } = req.params;

  const historial = await Paciente.findById(id).populate("historial");

  try {
    const historialActualizado = await historial.save();

    res.json(historialActualizado);
  } catch (error) {
    console.log(error);
  }
};

const editarHistorial = async (req, res) => {
  const { id } = req.params;

  const historial = await Historial.findById(id);

  console.log(historial);

  historial.temperatura = req.body.temperatura || historial.temperatura;
  historial.comida = req.body.comida || historial.comida;
  historial.higiene = req.body.higiene || historial.higiene;
  historial.postura = req.body.postura || historial.postura;
  historial.cardiaca = req.body.cardiaca || historial.cardiaca;
  historial.respiratoria = req.body.respiratoria || historial.respiratoria;
  historial.oxigeno = req.body.oxigeno || historial.oxigeno;
  historial.arterial = req.body.arterial || historial.arterial;
  historial.medicacion = req.body.medicacion || historial.medicacion;
  historial.wc = req.body.wc || historial.wc;
  historial.cuidados = req.body.cuidados || historial.cuidados;
  historial.apariencia = req.body.apariencia || historial.apariencia;
  historial.actitud = req.body.actitud || historial.actitud;
  historial.urgente = req.body.urgente || historial.urgente;
  historial.nota = req.body.nota || historial.nota;

  try {
    const historialActualizado = await historial.save();

    res.json(historialActualizado);
  } catch (error) {
    console.log(error);
  }
};

export {
  registrarPaciente,
  editarPaciente,
  listaPendientes,
  listaPacientes,
  buscaPaciente,
  agregarHistorial,
  buscarHistorial,
  editarHistorial,
};
