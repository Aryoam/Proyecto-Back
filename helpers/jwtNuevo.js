import jwt from "jsonwebtoken";

const jwtNuevo = (id) => {
  return jwt.sign({ id: id }, process.env.KEY_JWT, {
    expiresIn: "20d",
  });
};

export default jwtNuevo;
