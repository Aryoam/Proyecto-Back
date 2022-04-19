import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const coneccion = await mongoose.connect(process.env.KEY_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
    process.exit(1); // Pide a express a finalizar todos los procesos si la base de datos falla
  }
};

export default conectarDB;
