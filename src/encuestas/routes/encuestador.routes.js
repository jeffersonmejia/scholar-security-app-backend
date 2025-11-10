const express = require("express");
const router = express.Router();

const encuestador = require("../controllers/encuestador.controller");

router.get("/", encuestador.getEncuestador);

router.post("/", encuestador.createEncuestador);

router.get("/:id", encuestador.getEncuestadorId);

router.put("/:id", encuestador.editEncuestador);

router.delete("/:id", encuestador.deleteEncuestador);

module.exports = router;