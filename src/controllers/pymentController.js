import mercadopago from "mercadopago";
import { HOST, MERCADOPAGO_TOKEN } from "../config.js";

export const CrearOrden1 = async(req, res)=>{

   
   mercadopago.configure({
    access_token:
    MERCADOPAGO_TOKEN ,
   });

   const result= await mercadopago.preferences.create({
    items:[
        {
            id: 1,
            title: "Cancha 1 lo de Diego",
            unit_price: 2500,
            currency_id: "ARS",
            quantity:1,
    
        }
        // {
        //     id:2,
        //     title: "Cancha 2 lo de Diego",
        //     unit_price: 2500,
        //     currency_id: "ARS",
        //     quantity:1,    
        // }
    ],
    back_urls:{
       success: `${HOST}/success`,
       failure: `${HOST}/failure`,
       pending: `${HOST}/Pending`,
    },
    notification_url: "https://484f-45-229-39-231.ngrok.io/webhook",
   });
   console.log(result)
    res.send(result.body)

};
export const CrearOrden2 = async(req, res)=>{

   
    mercadopago.configure({
     access_token:
     "TEST-3663211043994333-092717-ddf66336afc72f6145ea2c9d0e2e00a0-1491943303",
    });
 
    const result= await mercadopago.preferences.create({
     items:[
         
         {
             id:2,
             title: "Cancha 2 lo de Diego",
             unit_price: 2500,
             currency_id: "ARS",
             quantity:1,
 
             
         }
     ],
     back_urls:{
        success: 'http://localhost:4000/success',
        failure: 'http://localhost:4000/failure',
        pending: 'http://localhost:4000/Pending'
     }
    })
    console.log(result)
     res.send('creando la orden')
 
 
 };

 export const reciveWebhook = async(req, res)=>{
  const pyment = req.query
  
    try {
    if (pyment.type ==="payment") {
      const data = await mercadopago.payment.findById(req.query['data.id'])
   
    console.log(data);

// mostrar en la base de datos

     }
    res.sendStatus(204);
     } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({ error: error.message})
  }
  
    
    

 };