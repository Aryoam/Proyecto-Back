import express from "express";
import cors from "cors";
import conectarDB from "./config/dataBase.js";
import routesAdministrador from "./routes/routesAdministrador.js";
import routesEnfermero from "./routes/routesEnfermero.js";
import routesPaciente from "./routes/routesPaciente.js";
import routesPendiente from "./routes/routesPendiente.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json()); // Esto hace que procese información JSON
dotenv.config();

conectarDB(); // llamo a la funcion para conectar la base de datos

const whiteList = ["http://localhost:3000", undefined];

const opcionesCors = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Bloqueado por Cors"));
    }
  },
};

app.use(cors(opcionesCors));

app.use("/api/administrador", routesAdministrador);
app.use("/api/enfermero", routesEnfermero);
app.use("/api/paciente", routesPaciente);
app.use("/api/pendiente", routesPendiente);

app.listen(4000, () => {
  console.log("Servidor correcto");
});
