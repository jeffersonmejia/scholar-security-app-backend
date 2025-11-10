const mongoose = require("mongoose");
const { Schema } = mongoose;
import { db2 } from './../../databaseMongo';

const encuestadorSchema = new Schema({
    codigo:{type: String, required: true, unique:true},
    nombre:{type: String, required:true}
});

module.exports = db2.model("Encuestador", encuestadorSchema);