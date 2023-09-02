import users from "../model/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/*export const register = async(req, res)=>{
    try{
        await users.create(req.body);
        res.status(200).json({"message":"Usuario creado exitosamente"});

    }catch(err){
        res.json({message: err.message});
    }
};*/

export const register = async (req, res) => {
  try {
    if (!req.body.nombre || !req.body.correo || !req.body.password) {
      return res
        .status(403)
        .json({ message: "Error: Toda la informacion debe ser diligenciada" });
    }

    console.log("Pasa if controller");
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = new users({
      nombre: req.body.nombre,
      correo: req.body.correo,
      password: hashedPassword,
    });
    console.log(newUser);
    await newUser.save();
    return res
      .status(201)
      .json({ newUser, message: "User is registered... (ok)" });
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await users.deleteOne({ _id: id }).then((res) => {
      console.log(res);
    });
    res.status(200).json({ message: "Usuario eliminado exitosamente" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const products = await users.find();
    res.status(200).json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await users.findOne({ correo: req.body.correo }); //busca usuario que tenga ese correo
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "wrong password..." });
    }
    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      algorithm: "HS512",
      expiresIn: "1d",
    });

    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ message: "token y cookie generados" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};


