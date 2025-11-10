import { Router } from "express";
import * as EncuestaCtrl from '../controllers/encuesta.controller'

const router = Router();

router.post('/', EncuestaCtrl.registrarEncuesta);

export default router;