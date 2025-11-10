const { Router } = require("express");
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
obtenerTodasLasInstituciones,
guardarInstitucion
} = require("../controllers/instituciones");
const { validarCampos } = require("../middlewares/validar-campos");
const { coleccionesPermitidas } = require("../helpers/db-validator");

const router = Router();

router.get("/", obtenerTodasLasInstituciones);

router.post("/", guardarInstitucion);

module.exports = router;
