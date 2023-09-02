import { Schema, model } from "mongoose";

const userSchema = new Schema({
    nombre: {
      type: String,
      required: [true, 'Campo requerido'],
      trim: true
    },
    correo: {
      type: String,
      required: [true, 'Campo requerido'],
      unique: true,
      match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Correo invalido']
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, 'Debe ser mayor a 5 caracteres']
    }
  }, {
    versionKey: false,
    timestamps: true
  })

export default model("users", userSchema);