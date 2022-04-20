import Pacientes from "../models/Pacientes.js";

const registrarPaciente = async (req, res) => {
  console.log("kjfnjk");
  const pacienteDuplicado = await Pacientes.findOne({
    telefono: req.body.telefono,
  });

  if (pacienteDuplicado) {
    return res.status(404).json({ msg: "Este paciente ya esta dado de alta" });
  }

  try {
    const paciente = new Pacientes(req.body);
    const nuevoPaciente = await paciente.save();
    res.json({ msg: "El paciente se dio de alta con exito" });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

export { registrarPaciente };
