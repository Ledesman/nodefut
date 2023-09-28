import { Router } from "express";
import  {CrearOrden1 , CrearOrden2, reciveWebhook} from '../controllers/pymentController.js'

const router = Router()

router.post('/create-order', CrearOrden1 )

router.post('/create-order2', CrearOrden2 )

router.get('/success', (req, res)=> res.send('se cobro correctamente orden'))

router.get('/failure', (req, res)=> res.send('no se completo la orden') )

router.get('/Pending', (req, res)=> res.send('Pendinte orden') )



router.post('/webhook', reciveWebhook );



export default router;