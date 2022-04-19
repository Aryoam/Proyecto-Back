import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const coneccion = await mongoose.connect(
      "mongodb+srv://root:root@cluster0.tn4wt.mongodb.net/residencia?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1); // Pide a express a finalizar todos los procesos si la base de datos falla
  }
};

export default conectarDB;
