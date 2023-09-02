import express from 'express';
import {createEnvio, deleteEnvio, getAllEnvios, getEnvio, updateEnvio, mostrar} from '../controllers/privateController.js';
import { checkAuth } from "../middleware/checkAuth.js";

const router = express.Router();

//enrutamientos
//para mostrar todos los envios
router.get('/', getAllEnvios);
//mostrar un solo envio buscado por id
router.get('/:id', checkAuth, getEnvio);
//crear un envio
router.post('/create', createEnvio);
//actualizar un envio
router.put('/update/:id', updateEnvio);
//borrar un envio
router.delete('/delete/:id', deleteEnvio);

router.get("/mostrar", checkAuth, mostrar);

export default router;