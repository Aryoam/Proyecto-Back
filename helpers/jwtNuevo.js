import jwt from "jsonwebtoken";

const jwtNuevo = (id) => {
  return jwt.sign({ id: id }, "passwordddd", {
    expiresIn: "1d",
  });
};

export default jwtNuevo;
