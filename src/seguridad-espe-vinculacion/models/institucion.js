const { Schema, model } = require("mongoose");
import { db4 } from './../../databaseMongo';
const institucionSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String, 
    required: true,
  },
  descripcion: {
    type: String,
  },
});

// Define el modelo de la institución educativa
const InstitucionEducativa = db4.model("InstitucionEducativa", institucionSchema);

module.exports = InstitucionEducativa;
